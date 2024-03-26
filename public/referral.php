<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, X-Requested-With");

include "dbconnect.php";
$myobj = new DbConnect;
$conn = $myobj->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "POST":
        // Get the JSON data
        $referral = json_decode(file_get_contents("php://input"));

        // Check if the email already exists in the database
        $existingEmailSql = "SELECT COUNT(*) AS count FROM referrals WHERE referee_email = :email";
        $existingEmailStmt = $conn->prepare($existingEmailSql);
        $existingEmailStmt->bindParam(':email', $referral->referee_email);
        $existingEmailStmt->execute();
        $existingEmailResult = $existingEmailStmt->fetch(PDO::FETCH_ASSOC);

        if ($existingEmailResult['count'] > 0) {
            // Email already exists, return response indicating data is being processed
            $response = [
                'success' => false,
                'message' => 'Your data is being processed'
            ];
        } else {
            // Perform additional validation if needed
            // For example, you can check if the email is valid using filter_var
            if (!filter_var($referral->referee_email, FILTER_VALIDATE_EMAIL)) {
                $response = [
                    'success' => false,
                    'message' => 'Invalid email format'
                ];
            } else {
                // Prepare and execute the SQL statement to insert the data
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
            }
        }
        break;
}

echo json_encode($response);
?>
