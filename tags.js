var i = 0;
$(document).ready(function(){
    $("#submit_number").click(function(){
      //console.log("click submit", i++);

        var data_number = $("#number").val();
        console.log(data_number);
        $("#number").val('');

        $.post("./api/post_number.php",
        {
            number: data_number,
            price: "20",
            type: "บน"
        },
        function(data,status){
          //alert("number: " + data + "\n price: " + price + "\n type:" + type);
        });
      
    });
});

/*
handle the click of close button on the tags
 */

// $(document).on("click", ".tags-input .data .tag .close", function() {
//     // whatever you do to delete this row
//     $(this).parent().remove()

// })

