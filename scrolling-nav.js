//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 100) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        //齐康宏添加更新logo图片的方法
        $("#logoImage").attr("src","assets/img/logo-dark.png");
        $(".top-menu").attr("style","color:#585b60;");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        //齐康宏添加更新logo图片的方法
        if ($(window).width() > 991){
            $("#logoImage").attr("src","assets/img/logo-light.png");
            $(".top-menu").attr("style","color:#ffffff;");
        }else{
            $("#logoImage").attr("src","assets/img/logo-dark.png");
            $(".top-menu").attr("style","color:#585b60;");
        }
    }

});


$(window).resize(function() {
    if ($(".navbar").offset().top > 100) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        //齐康宏添加更新logo图片的方法
        $("#logoImage").attr("src","assets/img/logo-dark.png");
        $(".top-menu").attr("style","color:#585b60;");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        //齐康宏添加更新logo图片的方法
        if ($(window).width() > 991){
            $("#logoImage").attr("src","assets/img/logo-light.png");
            $(".top-menu").attr("style","color:#ffffff;");
        }else{
            $("#logoImage").attr("src","assets/img/logo-dark.png");
            $(".top-menu").attr("style","color:#585b60;");
        }
    }

});



//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

