<?php
    header('Content-Type: application/json');
    //inport SQL Connection
    include("sql_connection.php");

    // echo "Skills : " . $_POST['number'];
    // echo "<br/>";
    // echo "Skills : " . $_POST['price'];
    // echo "<br/>";
    // echo "Skills : " . $_POST['type'];
    // echo "<br/>";
    // echo "<hr>";

    $number = $_POST['number'];
    $price = $_POST['price'];
    $type = $_POST['type'];

    $arr_data = [$number, $price, $type];

    $sql_add_number = "INSERT INTO number_1 (number, price, type)
    VALUES ('$number', '$price', '$type')";

    $insert_add_number = $conn->query($sql_add_number);

    echo json_encode($arr_data);

?>