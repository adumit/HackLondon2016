$("#scroll-how-it-works").click(function(e) {
	e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#how-it-works").offset().top
    }, 2000);
});


$("#scroll-home").click(function(e) {
	e.preventDefault();
    $('html, body').animate({
        scrollTop: $("html").offset().top
    }, 2000);
});

$("#submit-button").click(function(e) {
	e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#display-results").offset().top
    }, 2000);
});
