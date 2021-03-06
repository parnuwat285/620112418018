$("#btn-addMember").click(function () {
    $(".card-body").load("./views/addMember.html");
});
$(".btn-delMember").click(function(e){
    e.preventDefault();
    let thisBtn = $(this);
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        preConfirm: function () {
            $.ajax({
                url: "./models/delMember.php",
                method: "GET",
                cache: false,
                data: {
                    email : thisBtn.attr("email")
                },
                success: function() {
                    $(".card-body").load("./views/memberJ.php");
                }
            });
        }
      })
});

