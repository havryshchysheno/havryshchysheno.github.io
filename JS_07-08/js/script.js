$(document).ready(function() {
    $(".tab-link").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
        var tab = $(this).attr("href");
        $(".tab").not(tab).hide();
        $(tab).fadeIn();
    });
});