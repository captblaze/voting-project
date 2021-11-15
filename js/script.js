//business logic







//userInterface 
$(document).ready(function(){
    $(".button").click(function(){
        $("#form").toggle();
    })

$("#form").submit(function(event){
event.preventDefault();
const age = parseInt($("#age").val())
    if (age < 18) {
        console.log("i am a man")
        window.location.href="info.html"
        die();
    } else {
        window.location.href="voting.html" ;
    

    }
});
});
