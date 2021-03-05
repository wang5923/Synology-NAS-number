$(function () {

    $("#generate").click(function () {
        $("#sn").val(generateSerial($("#model").val())); //serial number
        $("#mac").val(generateSerial2($("#model").val())); //mac address
    });
	
});

function generateSerial2(permanent) {
    return "001132" + random(10, 16777215).toString(16).toUpperCase();
}

function generateSerial(permanent) {
    return (random(11,18) +padLeft(random(3,6),1)+"0" + permanent + "n" + padLeft(random(1,030000),6)).toUpperCase();
}

function padLeft(nr, n) {
    return Array(n - String(nr).length + 1).join('0') + nr;
}

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
