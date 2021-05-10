let time = 0;
let timer;
$('.btn-success').click(function () {
    console.log("Start")
    timer = setInterval(function () {
        console.log("run")
        time += 1;
        console.log(time);
        $('.actual-progress').css("width", time+"%")
        // if () {

        // }
    }, 500);

})

$('.btn-danger').click(function () {
    console.log("Pause")

})

$('.btn-warning').click(function () {
    console.log("Reset")
    $('.actual-progress').css("width", "0%");
    clearInterval(timer);

})