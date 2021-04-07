var i = 0;
var type = "ล่าง";
var price ="";
var star = "*";

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

                //search [*] for Price
                var search_star = data_number.search(/[*]/);

                    console.log("digit * = ", search_star);

                //รูดหน้าหลังเลขคู่
                if((data_number[0] == star[0]) & (data_number[1] == star[0])){
                    console.log('รูดหน้าหลังเลขคู่');
                }else{
                    //check ตัวรูด
                    if(search_star==1){
                        price = data_number.substring(search_star+1, data_number.length);
                        console.log(data_number," =  รูดหน้า", data_number.substring(search_star,-1), "ตัว", price);
                    }
                    //รูดหลัง
                    if(search_star==0){
                        price = data_number.substring(search_star+2, data_number.length);
                        console.log(data_number," =  รูดหลัง", data_number.substring(search_star+1,2), "ตัว", price);
                    }
                }



                //ตัวกลับ
                if(search_star==2){
                    price = data_number.substring(search_star+1, data_number.length);
                    var number_conv = data_number.substring(0, 2);
                    console.log("ตัวกลับ",number_conv, "ตัว", price);
                }


                $.post("./api/post_number.php",
                {
                    number: data_number,
                    price: "",
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

