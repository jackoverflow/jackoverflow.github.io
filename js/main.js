$(window).load(function(){
    $('.flexslider').flexslider({
    animation: "slide",
    start: function(slider){
        $('body').removeClass('loading');
    }
    });
});

$(document).ready(function(){
    // $('.owl-carousel').owlCarousel({
    //     autoplay: true,
    //     loop:true,
    //     pagination: false,
    //     margin:10,
    //     responsiveClass:true,
    //     responsive:{
    //         0:{
    //             items:1,
    //             nav:true
    //         },
    //         600:{
    //             items:1,
    //             nav:false
    //         },
    //         1000:{
    //             items:1,
    //             nav:true,
    //             loop:false
    //         }
    //     }
    // });

    $("ul.slides li").each(function(a) {
        $(this).find("div.slide-image").css("background-image" , 'url("' + $(this).find("img").attr("src") + '")');
        $(this).find("img.bg").hide()
    });     	
});

(function(){
    
    var burger = document.querySelector('.burger-container'),
        header = document.querySelector('.the-header');

    burger.onclick = function() {
        header.classList.toggle('menu-opened');
    }
}());