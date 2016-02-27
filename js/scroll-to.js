$('#scroll-how-it-works').click(function(event) {
    // Preventing default action of the event
    event.preventDefault();
    // Getting the height of the document
    var n = $(document).height();
    $('html, body').animate({scrollTop:$('#how-it-works').position().top}, 'slow');

    this.className = "active";
});

$('#scroll-home').click(function(event) {
    // Preventing default action of the event
    event.preventDefault();
    // Getting the height of the document
    var n = $(document).height();
    $('html, body').animate({ scrollTop: 0 }, 600);

    this.className = "active";
});
