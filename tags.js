var i = 0;
var type = "ล่าง";

$(document).ready(function(){
    $("#alert_type").hide();
    
    $( "#number" ).keydown(function(event) {
        if ( event.which == 111 ) {
            event.preventDefault();
            console.log("Change Type");
            playAudio();

            if(type == "ล่าง"){
                type = "บน";
                $("#type").text(type); 
                // $("#alert_type").slideDown("slow").delay(500);
                // $("#alert_type").slideUp("slow").hide("slow");
            }else{
                type = "ล่าง";
                $("#type").text(type); 
                // $("#alert_type").slideDown("slow").delay(500);
                // $("#alert_type").slideUp("slow").hide("slow");
            }
            console.log("type : ", type);



        }
    });


    $("#number").on( "keydown", function(event) {
        data_number = $("#number").val();
        
        if(event.which == 13){
            if(data_number == ''){
                console.log("Data : null")
            }else{
                console.log(data_number);
                $("#number").val('');
        
                $.post("./api/post_number.php",
                {
                    number: data_number,
                    price: "20",
                    type: type,
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

