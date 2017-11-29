$(document).ready(function () {
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