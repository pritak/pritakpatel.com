$(document).ready(function () {

    $("#underline-1").hover(function () {
        $('#underline-1-text').toggle();
    });
    $("#underline-2").hover(function () {
        $('#underline-2-text').toggle();
    });
    $("#underline-3").hover(function () {
        $('#underline-3-text').toggle();
    });

    $.fn.extend({
        animateCss: function (animationName, callback) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function () {
                $(this).removeClass('animated ' + animationName);
                if (callback) {
                    callback();
                }
            });
            return this;
        }
    });

    setInterval(function () {
        $('#heart-footer').animateCss("pulse");
    }, 2000);

    var animationOptions = ["bounce", "flash", "pulse", "rubberBand",
        "shake", "headShake", "swing", "tada",
        "wobble", "jello", "bounceIn", "bounceInDown",
        "bounceInLeft", "bounceInRight", "bounceInUp",
        "fadeIn", "fadeInDown", "fadeInDownBig", "fadeInLeft",
        "fadeInLeftBig", "fadeInRight", "fadeInRightBig", "fadeInUp",
        "fadeInUpBig", "flipInX", "flipInY", "lightSpeedIn",
        "rotateIn", "rotateInDownLeft", "rotateInDownRight", "rotateInUpLeft",
        "rotateInUpRight", "jackInTheBox",
        "rollIn", "zoomIn", "zoomInDown",
        "zoomInLeft", "zoomInRight", "zoomInUp",
        "slideInDown", "slideInLeft", "slideInRight", "slideInUp"];

    document.getElementById("main-title").onclick = function () {
        var rand = animationOptions[Math.floor(Math.random() * animationOptions.length)];
        $('#main-title').animateCss(rand);
    };
});