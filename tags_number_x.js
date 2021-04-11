var i = 0;
var type = "ล่าง";
var price ="";
var star = "*";
var delete_ = "-";

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
                console.log("input ", data_number);
                $("#number").val('');

                //search [*] for Price
                var search_star = data_number.search(/[*]/);

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

                //ตัวกลับ 2 ราคา
                //count * 
                var split_data_number = data_number.split("*").length -1;
                if(split_data_number == 2){
                    if(data_number[2]== star[0]){
                        console.log("have 2 '*' and string[3] =='*'");

                        var star_start_End =[];

                        for (let i = 0; i < data_number.length; i++) {
                            if(data_number[i] == "*"){
                                star_start_End.push(i);
                            }
                        }
                        console.log("star_start_End :",star_start_End);
                        var price1 = data_number.substring(3, star_start_End[1]);
                        var price2 = data_number.substring(star_start_End[1]+1, data_number.length);
                        console.log("price1 : ", price1);
                        console.log("price2 : ", price2);

                    }
                }

                //ตัว บน และ ล่าง
                //count (-)
                var split_delete_number = data_number.split("-").length -1;
                if(split_delete_number >= 1 ){
                    if(split_delete_number == 2){
                        if(data_number[2]== delete_[0]){
                            console.log("have 2 '-' and string[3] =='-'");
    
                            var delete_start_End =[];
    
                            for (let i = 0; i < data_number.length; i++) {
                                if(data_number[i] == "-"){
                                    delete_start_End.push(i);
                                }
                            }
                            console.log("delete_start_End :",delete_start_End);
                            var price1 = data_number.substring(3, delete_start_End[1]);
                            var price2 = data_number.substring(delete_start_End[1]+1, data_number.length);
    
                            var number_up = data_number.substring(0,2);
                            var number_down =  
                            console.log("price1 : ", number_up, "-" , price1, "บน");
                            console.log("price2 : ", number_up, "-" , price2, "ล่าง");

                            type = "บน, ล่าง";
    
                        }
                    }

                    if(split_delete_number == 1){
                        if(data_number[2]== delete_[0]){
                            console.log("have 1 '-' and string[3] =='-'");
    
                            var delete_start_End =[];
    
                            for (let i = 0; i < data_number.length; i++) {
                                if(data_number[i] == "-"){
                                    delete_start_End.push(i);
                                }
                            }
                            console.log("delete_start_End :",delete_start_End);
                            var price = data_number.substring(3, delete_start_End[1]);
    
                            var number_up_down = data_number.substring(0,2);
 
                            console.log("price1 : ", number_up_down, "-" , price, "บน");
                            console.log("price2 : ", number_up_down, "-" , price, "ล่าง");
                            
                            type = "บน, ล่าง";
                        }
                    }
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

