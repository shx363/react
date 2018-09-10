$(function () {
    $("#slider").responsiveSlides({
        auto: true,
        pager: false,
        nav: true,
        speed: 500,
        timeout:4000,
        pager: true, 
        pauseControls: true,
        namespace: "callbacks"
    });
});