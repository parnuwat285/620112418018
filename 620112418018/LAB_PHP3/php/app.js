$(function(){
    //alert();
    $("#menu_member").click(function() {
        $("a").removeClass("mm-active");
        $(this).addClass("mm-active");
        $(".card-body").load("./views/memberJ.php");
    });
});//jQuery Handle/Ready