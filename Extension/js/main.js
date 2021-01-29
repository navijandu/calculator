$(document).ready(function () {
    /*   var audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/click.mp3');*/
    var audio2 = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/clickUp.mp3')

    $(".btn").mousedown(function () {
        audio2.load();
        audio2.play();
    });

    /*  $(".btn").mouseup(function () {
        audio.load();
        audio.play();
    });*/

});

function insert(num) {

    $(".display").val($(".display").val() + num);
}

function sum() {

    $(".display").val(eval($(".display").val()));
};

function ce() {
    var old = $(".display").val();
    var ne = old.slice(0, -1);
    $(".display").val(ne);
}

function c() {
    $(".display").val(" ")
}
