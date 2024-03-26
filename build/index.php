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
    $sql = "INSERT INTO career_applications (id, first_name, last_name, email, qualifications, position, description) VALUES (null, :first_name, :last_name, :email, :qualifications, :position, :description)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':first_name', $new_member->first_name);
    $stmt->bindParam(':last_name', $new_member->last_name);
    $stmt->bindParam(':email', $new_member->email);
    $stmt->bindParam(':qualifications', $new_member->qualifications);
    $stmt->bindParam(':position', $new_member->position);
    $stmt->bindParam(':description', $new_member->description);
    if ($stmt->execute()) {
        $response = [
            'success' => true,
            'message' => 'Data inserted successfully'
        ];
    } else {
        $response = [
            'success' => false,
            'message' => 'Error inserting data: ' . $stmt->error
        ];
    }
    break;
}
    
?>