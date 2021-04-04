<?php include("sql_connection.php"); ?>
<?php
    $sql_list_all = "SELECT * FROM `number`";
    $result_list_all = $conn->query($sql_list_all);
?>

<table border="1" style="width:100%">
    <tr>
        <td>ID</td>
        <td>Number</td>
        <td>Price</td>
        <td>Type</td>
    </tr>
    <?php
    foreach ($result_list_all as $key => $value_list_all) {
        echo "<tr>";
            echo "<td>" . $value_list_all["id"]. "</td>";
            echo "<td>" . $value_list_all["number"]. "</td>";
            echo "<td>" . $value_list_all["price"]. "</td>";
            echo "<td>" . $value_list_all["type"]. "</td>";
        echo "<tr>";
    }
    ?>
</table>