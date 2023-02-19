// Owlcarousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	loop:true,
    margin:10,
    nav:true,
	autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    center: true,
    navText: [
	    "<i class='fa fa-angle-left'></i>",
	    "<i class='fa fa-angle-right'></i>"
	],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
  });
});
window.addEventListener('load', function() {
  var bodyHeight = document.body.offsetHeight;
  var windowHeight = window.innerHeight;
  var footerHeight = document.getElementsByTagName('footer')[0].offsetHeight;
  if (bodyHeight < windowHeight) {
    document.getElementsByTagName('footer')[0].style.position = 'fixed';
    document.getElementsByTagName('footer')[0].style.bottom = '0';
  } else {
    document.getElementsByTagName('footer')[0].style.position = 'relative';
    document.getElementsByTagName('footer')[0].style.bottom = '-' + footerHeight + 'px';
  }
});

window.addEventListener('resize', function() {
  var bodyHeight = document.body.offsetHeight;
  var windowHeight = window.innerHeight;
  var footerHeight = document.getElementsByTagName('footer')[0].offsetHeight;
  if (bodyHeight < windowHeight) {
    document.getElementsByTagName('footer')[0].style.position = 'fixed';
    document.getElementsByTagName('footer')[0].style.bottom = '0';
  } else {
    document.getElementsByTagName('footer')[0].style.position = 'relative';
    document.getElementsByTagName('footer')[0].style.bottom = '-' + footerHeight + 'px';
  }
});
var slides = document.querySelectorAll('.slideshow li');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
  slides[currentSlide].style.opacity = 0;
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.opacity = 1;
}

