<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Database connection settings
$servername = "localhost"; // Your server name
$username = "root"; // Your database username
$password = ""; // Your database password
$dbname = "signin"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the request method
$request_method = $_SERVER['REQUEST_METHOD'];

// Handle requests based on the method
switch ($request_method) {
    case 'POST':
        $data = json_decode(file_get_contents('php://input'), true);

        if (isset($data['action'])) {
            if ($data['action'] === 'create_account') {
                // Account creation logic
                $name = $data['name'];
                $username = $data['username'];
                $email = $data['email'];
                $password = $data['password']; // Ideally, you should hash this

                // SQL query to insert the new user
                $sql = "INSERT INTO users (name, username, email, password) VALUES ('$name', '$username', '$email', '$password')";
                
                if ($conn->query($sql) === TRUE) {
                    echo json_encode(array("success" => true, "message" => "Account created successfully!"));
                } else {
                    echo json_encode(array("success" => false, "message" => "Error creating account: " . $conn->error));
                }
            } elseif ($data['action'] === 'login') {
                // Login logic
                $username = $data['username'];
                $password = $data['password'];

                // SQL query to check for user credentials
                $sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
                $result = $conn->query($sql);

                if ($result->num_rows > 0) {
                    // User found, successful login
                    echo json_encode(array("success" => true, "message" => "Login successful!"));
                } else {
                    // No user found, failed login
                    echo json_encode(array("success" => false, "message" => "Incorrect username or password."));
                }
            } else {
                echo json_encode(array("success" => false, "message" => "Invalid action."));
            }
        } else {
            echo json_encode(array("success" => false, "message" => "No action specified."));
        }
        break;

    default:
        echo json_encode(array("success" => false, "message" => "Invalid request method."));
        break;
}

// Close the connection
$conn->close();
?>
