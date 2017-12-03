var $window = $(window);

$(document).ready(function () {
    if ($window.width() < 768) {
        $('#title-hero').removeClass('is-fullheight');
        return;
    }
});

(function ($) {

    function resize() {
        if ($window.width() < 768) {
            $('#title-hero').removeClass('is-fullheight');
            return;
        }
        if ($window.width() > 768) {
            $('#title-hero').addClass('is-fullheight');
            return;
        }
    }
    $window
        .resize(resize)
        .trigger('resize');
})(jQuery);