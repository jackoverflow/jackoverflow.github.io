$('.owl-carousel').owlCarousel({
	autoplay: true,
    loop:true,
    pagination: false,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
})	

(function(){
    
    var burger = document.querySelector('.burger-container'),
        header = document.querySelector('.the-header');

    burger.onclick = function() {
        header.classList.toggle('menu-opened');
    }
}());