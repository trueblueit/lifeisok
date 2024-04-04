<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, X-Requested-With");

include "dbconnect.php";
$myobj = new DbConnect;
$conn = $myobj->connect();

$method =$_SERVER['REQUEST_METHOD'];
switch($method) {
    case "POST":
    $new_member=json_decode(file_get_contents("php://input")); 
    // Check if the email already exists
    $checkEmailSql = "SELECT COUNT(*) AS count FROM career WHERE email = :email";
    $checkEmailStmt = $conn->prepare($checkEmailSql);
    $checkEmailStmt->bindParam(':email', $new_member->email);
    $checkEmailStmt->execute();
    $emailCount = $checkEmailStmt->fetchColumn();

   if(empty($new_member->email) || empty($new_member->phone) || empty($new_member->first_name) || empty($new_member->last_name) ){
        $response = [
            'success' => false,
            'heading' => 'Missing Information',
            'message' => 'Make sure you enter your name, email and contact number'
        ];

    }
    elseif ($emailCount > 0) {
        $response = [
            'success' => false,
            'heading' => 'Email already exists'
            'message' => 'Try again with a different email'
        ];
    } 
    else {
    $sql = "INSERT INTO career (id, first_name, last_name, email,phone, qualifications, position, description) VALUES (null, :first_name, :last_name, :email, :phone, :qualifications, :position, :description)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':first_name', $new_member->first_name);
    $stmt->bindParam(':last_name', $new_member->last_name);
    $stmt->bindParam(':email', $new_member->email);
    $stmt->bindParam(':phone', $new_member->phone);
    $stmt->bindParam(':qualifications', $new_member->qualifications);
    $stmt->bindParam(':position', $new_member->position);
    $stmt->bindParam(':description', $new_member->description);
    if ($stmt->execute()) {
        $response = [
            'success' => true,
            'message' => 'Your application has been submitted successfully'
        ];
    } else {
        $response = [
            'success' => false,
            'message' => 'Error inserting data: ' . $stmt->error
        ];
    }
}
    break;
}
    
echo json_encode($response); 

// Compose email message
$to = 'recipient_email@example.com';
$subject = 'Form Submission';
$body = "Name: $name\nEmail: $email\nMessage: $message";

// Send email
if (mail($to, $subject, $body)) {
    echo "Email sent successfully";
} else {
    echo "Failed to send email";
}
} else {
// Handle invalid request method
echo "Invalid request method";
}

?>