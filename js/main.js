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

    // $("nav a").click(function(e){
    //     var url = $(this).attr('href')
    //     var link = url.toString();
    //     // alert(link);        

    //     e.preventDefault();    
    //     $('html,body').scrollTo(this.hash,this.hash, function(){
    //         $('main h2').css('padding-top','90px');
    //         if(link == "#news-and-events") {
    //             $('main h2').css('padding-top','0px');
    //         }
    //     });   
        
    // });
  // Add smooth scrolling to all links
  $("nav a").on('click', function(event) {

    event.preventDefault();
    var url = $(this).attr('href')
    var link = url.toString();
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });     


});
