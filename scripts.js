var btn = $('#toTop');
// To top button
$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});

// Navbar
$(document).ready(function () {
    $(".ham a").click(function () {
        $(".overlay").fadeToggle(200);
        $(this).toggleClass('btn-open').toggleClass('btn-close');
        if (document.body.style.overflowY == "hidden")
            document.body.style.overflowY = "scroll";
        else document.body.style.overflowY = "hidden";
    });
});
$('.overlay').on('click', function () {
    $(".overlay").fadeToggle(200);
    $(".ham a").toggleClass('btn-open').toggleClass('btn-close');
    if (document.body.style.overflowY == "scroll")
        document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "scroll";
    open = false;
});
