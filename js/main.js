$(window).load(function(){
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
        $(this).find("img").hide();
    });

    var subpagebanner = $(".subpage-banner");
    subpagebanner.css("background-image" , 'url("' + $(this).find("img").attr("src") + '")');
    subpagebanner.find('img.bg').hide();    

    $('.menu .item').tab();    
    
});


(function(){
    
    var burger = document.querySelector('.burger-container'),
        header = document.querySelector('.the-header');

    burger.onclick = function() {
        header.classList.toggle('menu-opened');
    }
}());

$(window).resize(function(){

       if ($(window).width() <= 768) {              
            $('.twelve.wide.column.ui.grid.container').removeClass('twelve').prop('class','sixteen wide column ui grid container');            
            $('.four.wide.column.ui.grid.container').removeClass('four').prop('class','sixteen wide column ui grid container');
       } else if ($(window).width() >= 768) {  
            $('.wide.column.ui.grid.container.sixteen').prop('class','twelve wide column ui grid container sixteen');
            $('.twelve.wide.column.ui.grid.container.sixteen').removeClass('sixteen');
            
            $('.ui.grid.two.column').children().first().prop('class','four wide column ui grid container' );
       }

});