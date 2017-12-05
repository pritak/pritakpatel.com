var $window = $(window);

$(document).ready(function () {

    $('#click-toggle').click(function(){
        var toggle = $('#left-column').hasClass('is-half');
        $(this).toggleClass('flip');
        $('#left-column').toggleClass('is-half', !toggle);
        $('#right-column').toggleClass('is-half', !toggle);
        $('#filler-column').toggleClass('is-half', !toggle);
        $('#left-column').toggleClass('is-one-third', toggle);
        $('#right-column').toggleClass('is-two-thirds', toggle);
        $('#filler-column').toggleClass('is-one-third', toggle);
        return;
    });

    if ($window.width() < 769) {
        $('#title-hero').removeClass('is-fullheight');
        return;
    }
    if ($window.width() < 1000) {
        $('#navigation').removeClass('is-size-6');
        $('#navigation').addClass('is-size-7');
        return;
    }
});

(function ($) {

    function resize() {
        if ($window.width() < 769) {
            $('#title-hero').removeClass('is-fullheight');
            return;
        }
        if ($window.width() > 769) {
            $('#title-hero').addClass('is-fullheight');
            return;
        } 
    }
    $window
        .resize(resize)
        .trigger('resize');
})(jQuery);