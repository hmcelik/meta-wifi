
$(document).ready(function() {
    /*$("#toggling").text("View More");
    $("#toggle").append("<i id='moreico' class=\"fa fa-ellipsis-h\"></i> ");*/
    
    $("#toggling").click(function() {
        var elem = $("#toggling").text();
        $("#text-1").show();
        /*alert(elem);*/
        if (elem === "View More") {
            $("#text-1").slideDown();
            //Stuff to do when btn is in the View More state
            $("#toggling").text("View Less");
            $("#toggling").append("<i id='lessico' class=\"fa fa-angle-up\"></i> ");
            $("#moreico").css("margin-top","-2.5em ");
           
        } else {
            //Stuff to do when btn is in the View Less state
            var anchor = document.querySelector('#team');
            anchor.scrollIntoView();
            $("#text-1").hide();
            $("#toggling").text("View More");
            $("#toggling").append("<i id='moreico' class=\"fa fa-angle-down\"></i>");
            $("#moreico").css("margin-top","-2.5em ");
            // $("#text-1").css("display","none");
        
        }
    });
});





