// automatic slideshow off //
$(document).ready(function () {
    $("#demo").carousel({
        interval: false
    });
});
$(document).ready(function () {
    $("#demo1").carousel({
        interval: false
    });
    $("#demo2").carousel({
        interval: false
    });
    $("#art").carousel({
        interval: false
    });
    $("#art1").carousel({
        interval: false
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('shadow');
        } else {
            $('.navbar').removeClass('shadow');
        }
    });
    $("[data-trigger]").on("click", function () {
        var trigger_id = $(this).attr('data-trigger');
        $(trigger_id).toggleClass("show");
        $('body').toggleClass("offcanvas-active");
    });

    // close button 
    $(".btn-close").click(function (e) {
        $(".navbar-collapse").removeClass("show");
        $("body").removeClass("offcanvas-active");
    });
});

var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
    document.querySelectorAll('*'),
    function (el) {
        if (el.offsetWidth > docWidth) {
            console.log(el);
        }
    }
);