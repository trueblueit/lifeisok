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
    $feedback=json_decode(file_get_contents("php://input")); 
    $sql = "INSERT INTO feedback (rating, email, description) VALUES (:rating, :email, :description)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':email', $feedback->email);
    $stmt->bindParam(':rating', $feedback->rating);
    $stmt->bindParam(':description', $feedback->description);
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
echo json_encode($response); 
?>