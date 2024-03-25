
<?php

class DbConnect {
    private $server = "localhost";
    private $username = "root";
    private $password = "";
    private $database = "myname";

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