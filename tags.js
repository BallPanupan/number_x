var i = 0;
$(document).ready(function(){
    // $("#submit_number").click(function(){
    //     var data_number = $("#number").val();
    //     if(data_number == ''){
    //         console.log("Data : null")
    //     }else{
    //         console.log(data_number);
    //         $("#number").val('');
    
    //         $.post("./api/post_number.php",
    //         {
    //             number: data_number,
    //             price: "20",
    //             type: "บน"
    //         },function(){
    //           //alert("number: " + data + "\n price: " + price + "\n type:" + type);
    //         });
    //     }
    //     $("#list_number").load("./list_number.php");
    // });
    
    $("#number").on( "keydown", function(event) {
        if(event.which == 13){
            var data_number = $("#number").val();
            if(data_number == ''){
                console.log("Data : null")
            }else{
                console.log(data_number);
                $("#number").val('');
        
                $.post("./api/post_number.php",
                {
                    number: data_number,
                    price: "20",
                    type: "บน"
                },function(){
                  //alert("number: " + data + "\n price: " + price + "\n type:" + type);
                });
            }
            $("#list_number").load("./list_number.php");
        }
        $("#list_number").load("./list_number.php");
    });
    $("#list_number").load("./list_number.php");
});


/*
handle the click of close button on the tags
 */

// $(document).on("click", ".tags-input .data .tag .close", function() {
//     // whatever you do to delete this row
//     $(this).parent().remove()

// })

