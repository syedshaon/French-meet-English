$ = jQuery.noConflict();
// Show hide search form

$(".search-icon").click(function () {
    $(".search-icon").hide();
    $(".searchform-wrapper").show();
})

$(".nav-hamburger").click(function () {
    $(".nav-menu").slideToggle("fast");
})

$(window).resize(function () {
    if ($(window).width() > 990) {
        $(".nav-menu").show();
    }

});



// Return to Top


$(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {        // If page is scrolled more than 100px
        $('.to-top').show();    // Fade in the arrow
    } else {
        $('.to-top').hide();   // Else fade out the arrow
    }
});



$(".animated").addClass("wow");
// $(".front-main-content").children().addClass("wow animated fadeInUp");
// $(".entry-meta").addClass("wow animated fadeInLeft");
// $(".entry-content").addClass("wow animated fadeInRight");
// $(".entry-header").addClass("wow animated fadeInUp");
// $(".widget-area").addClass("wow animated fadeInUp");
// $(".video-play-title").addClass("wow animated fadeInUp");
// $(".test").addClass("video-play-area-ok");







