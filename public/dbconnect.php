
<?php

class DbConnect {
    private $server = "localhost";
    $username = 'u966329698_lifeisok'; // Replace with your MySQL username
$password = 'Lifeisok083'; // Replace with your MySQL password
$database = 'u966329698_react_lifeisok'; // Replace with your MySQL database name

    public function connect() {
        try{
            $conn = new PDO ("mysql:host=$this->server;dbname=$this->database", $this->username, $this->password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        }   catch(\Exception $e) {
            echo "Connection failed: " . $e->getMessage();
        }

   
    }
}

    

$db = new DbConnect();
?>