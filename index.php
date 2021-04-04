<!DOCTYPE html>
<html>

<head>
    <title>number_x</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="./css/bootstrap.min.css">
    <script src="./jquery/jquery.min.js"></script>
    <script src="./bootstrap/bootstrap.min.js"></script>

    <script src="tags.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>

<body>
    <?php include("sql_connection.php"); ?>
    <!-- <div class="jumbotron text-center">
        <h1>number_x</h1>
    </div> -->

    <div class="container">
        <div class="row">

            <div class="col-sm-4">
                <h3>Result</h3>
                <div id="list_number">
                </div>
            </div>

            <div class="col-sm-4">
                <h3>Input number</h3>
                
                <form method="post" action="javascript:void(0)">
                    <input type="text" name="number" id="number" autocomplete="off" autofocus>
                    <input type="hidden" name="price" value="0">
                    <input type="hidden" name="type" value="บน">

                    <!-- <input type="submit" id="submit_number"> -->
                    <button id="submit_number">Submit</button>
                </form>

            </div>

            <div class="col-sm-4">
                <h3>manual only : def = ล่าง</h3>
                <h3>กด F1 = type:ล่าง</h3>
                <h3>กด F2 = type:บน</h3>

                <h3><p id="type"> ประเภท : ล่าง</p></h3>

            </div>

        </div>
    </div>

</body>

</html>