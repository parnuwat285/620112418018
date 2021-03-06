$("#from-addMember").submid(function (e){
    e.preventDefault();

    $.ajax({
        url: "./models/addMember.php",
        method: "POST",
        cache: false,
        data: $(this).serialize(),
        beforeSend: function(){
            $(":submid").attr("disabled",true);
        },
        success: function(msg) {
            console.log(msg);
            $(":submid").attr("disabled",false);
            $(".card-body").laod("./views/memberJ");
        }
    });
});