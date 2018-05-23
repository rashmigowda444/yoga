<?php
include('db.php');

$data = json_decode(file_get_contents("php://input"));

$sql = "SELECT * FROM ady_services";

$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
     $data1 = array() ;
    while($row = $result->fetch_assoc()) {
        $data1[] = $row;
    }
    echo json_encode($data1);
} 
else {
    echo "0";
	
}

$conn->close();

?>

