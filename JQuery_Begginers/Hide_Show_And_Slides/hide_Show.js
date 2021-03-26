//Hide method is used to hide the content and show method is used to display the content again

//1000 argument that passed in it is used to to give a time to the contnent to hide  but it is not mendaotory

$(document).ready(function () {



    var a = 1;


    $('#b1').click(function () {
        while (a <= 5) {
            $('#P1').hide(1000, function () {
                console.log("Hidden");
            });

            $('#P1').show(1000, function () {
                console.log("Show");
            });

            a++;
        }

    });

$('#p2').slideDown(10000,function(){
    console.log('Slide Down');
});


$('#p2').slideUp(10000,function(){
    console.log('Slide Up');
});

$('#p2').slideToggle(10000,function(){
    console.log('Slide Up');
});



});










