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
    $("ul.slides li").each(function(a) {
        $(this).find("div.slide-image").css("background-image" , 'url("' + $(this).find("img.bg").attr("src") + '")');
        $(this).find("img.bg").hide();
    });

    $("nav a").click(function(e){
        e.preventDefault();    
        $('html,body').scrollTo(this.hash,this.hash, function(){
            $('main h2').css('padding-top','90px');
        });        
    });
});
