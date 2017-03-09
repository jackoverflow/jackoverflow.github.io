// $(window).load(function(){
$(document).ready(function(){
    if($(".flexslider").length > 0) {

        $('.flexslider').flexslider({
        animation: "slide",
        start: function(slider){
            $('body').removeClass('loading');
        }
        });

    }
});

$(document).ready(function(){
    $("ul.slides li").each(function(a) {
        $(this).find("div.slide-image").css("background-image" , 'url("' + $(this).find("img").attr("src") + '")');
        $(this).find("img:first").hide();
    });

    if ($('.tabular.menu').length > 0) {
        $('.menu .item').tab();
    }

});


(function(){

    var burger = document.querySelector('.burger-container'),
        header = document.querySelector('.the-header');

    burger.onclick = function() {
        header.classList.toggle('menu-opened');
    }
}());
