$(document).ready(function () {


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
