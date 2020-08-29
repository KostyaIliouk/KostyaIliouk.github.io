$(document).ready(function() {
    setInterval(function() {
        var docHeight = $(window).height();
        var footerHeight = $('#footer').height();
        var navHeight = $('#mainNav').height() + $('#cvNav').height();
        $("#aboutContent").css('height',docHeight - navHeight - footerHeight - 25);
    }, 250);
});