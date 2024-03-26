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
    $referral=json_decode(file_get_contents("php://input")); 
    $sql = "INSERT INTO referrals (participant_name, ndis_number, address, contact_number, service_type, funding_body, referee_name, organisation_name, referee_email, relation_to_participant, referee_contact_number, callback_request) VALUES (:participant_name, :ndis_number, :address, :contact_number, :service_type, :funding_body, :referee_name, :organisation_name, :referee_email, :relation_to_participant, :referee_contact_number, :callback_request)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':participant_name', $referral->participant_name);
    $stmt->bindParam(':ndis_number', $referral->ndis_number);
    $stmt->bindParam(':address', $referral->address);
    $stmt->bindParam(':contact_number', $referral->contact_number);
    $stmt->bindParam(':service_type', $referral->service_type);
    $stmt->bindParam(':funding_body', $referral->funding_body);
    $stmt->bindParam(':referee_name', $referral->referee_name);
    $stmt->bindParam(':organisation_name', $referral->organisation_name);
    $stmt->bindParam(':referee_email', $referral->referee_email);
    $stmt->bindParam(':relation_to_participant', $referral->relation_to_participant);
    $stmt->bindParam(':referee_contact_number', $referral->referee_contact_number);
    $stmt->bindParam(':callback_request', $referral->callback_request);
    
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