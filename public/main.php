<?php
// process_form.php

// Database configuration
$host = '154.41.240.103'; // Replace with your MySQL server hostname or IP address
$username = 'u966329698_lifeisok'; // Replace with your MySQL username
$password = 'Lifeisok083'; // Replace with your MySQL password
$database = 'u966329698_react_lifeisok'; // Replace with your MySQL database name

// Create database connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$data = json_decode(file_get_contents('php://input'), true);
$first_name = $conn->real_escape_string($data['first_name']);
$last_name = $conn->real_escape_string($data['last_name']);
$email = $conn->real_escape_string($data['email']);
$qualifications = $conn->real_escape_string($data['qualifications']);
$position = $conn->real_escape_string($data['position']);
$description = $conn->real_escape_string($data['description']);

// Insert data into career table
$sql = "INSERT INTO career (first_name, last_name, email, qualifications, position, description) 
        VALUES ('$first_name', '$last_name', '$email', '$qualifications', '$position', '$description')";

if ($conn->query($sql) === TRUE) {
    $response = [
        'success' => true,
        'message' => 'Data inserted successfully'
    ];
} else {
    $response = [
        'success' => false,
        'message' => 'Error inserting data: ' . $conn->error
    ];
}

// Close database connection
$conn->close();

// Send response back to client
header('Content-Type: application/json');
echo json_encode($response);
?>


