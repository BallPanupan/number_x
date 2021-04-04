<!DOCTYPE html>
<html>

<head>
    <title>number_x</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="./css/bootstrap.min.css">
    <script src="./jquery/jquery.min.js"></script>
    <script src="./bootstrap/bootstrap.min.js"></script>
</head>

<body>
    <?php include("sql_connection.php"); ?>
    <div class="jumbotron text-center">
        <h1>number_x</h1>
    </div>

    <div class="container">
        <div class="row">

            <div class="col-sm-4">
                <h3>Result</h3>
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

            </div>

            <div class="col-sm-4">
                <h3>Input number</h3>
                
                <form method="post" action="./api/post_number.php">
                    <input type="text" name="number">
                    <input type="hidden" name="price" value="0">
                    <input type="hidden" name="type" value="บน">

                    <input type="submit">
                </form>

            </div>

            <div class="col-sm-4">
            </div>

        </div>
    </div>

</body>

</html>