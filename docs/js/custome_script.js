;(function ($) {
"use strict";
	// Mouse Cursor Effect
	var cursor = document.querySelector('.mouse-cursor');
	var cursorinner = document.querySelector('.mouse-cursor2');
	var a = document.querySelectorAll('a');

	document.addEventListener('mousemove', function(e){
	  var x = e.clientX;
	  var y = e.clientY;
	  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
	});

	document.addEventListener('mousemove', function(e){
	  var x = e.clientX;
	  var y = e.clientY;
	  cursorinner.style.left = x + 'px';
	  cursorinner.style.top = y + 'px';
	});

	document.addEventListener('mousedown', function(){
	  cursor.classList.add('click');
	  cursorinner.classList.add('cursorinnerhover')
	});

	document.addEventListener('mouseup', function(){
	  cursor.classList.remove('click')
	  cursorinner.classList.remove('cursorinnerhover')
	});

	a.forEach(item => {
	  item.addEventListener('mouseover', () => {
		cursor.classList.add('cursor-hover');
	  });
	  item.addEventListener('mouseleave', () => {
		cursor.classList.remove('cursor-hover');
	  });
	});
	
	// AOS Animate Effect
	AOS.init({
		easing: 'ease-in-out-sine'
	});
	
	// Preloader
    $(window).on('load', function () {
	   $('.preloader').delay(333).fadeOut('slow');
	   $('body').delay(333);
    });
	
	// Swiper Portfolio One
	var swiper = new Swiper('.swiper-portfolio.swiperslider-pro-one', {
		spaceBetween: 30,
		loop: true,
		breakpoints: {
			200: {
				slidesPerView: 1,
				spaceBetween: 30,
			},
			420: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			639: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
		},
		autoplay: {
			delay: 1,
		}, 
		speed: 2000,
		});
		$(".swiper-portfolio.swiperslider-pro-one").hover(function() {
			(this).swiper.autoplay.stop();
		}, function() {
			(this).swiper.autoplay.start();
	});

	// Swiper Portfolio Two
	var swiper = new Swiper('.swiper-portfolio.swiperslider-pro-tow', {
		spaceBetween: 30,
		loop:true,
		breakpoints: {
			200: {
				slidesPerView: 1,
				spaceBetween: 30,
			},
			420: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			639: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			992: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
			1200: {
				slidesPerView: 5,
				spaceBetween: 30,
			},
		},
		autoplay: {
			delay: 1,
			reverseDirection: true, 
		}, 
		speed: 2000,
		});
		$(".swiper-portfolio.swiperslider-pro-tow").hover(function() {
			(this).swiper.autoplay.stop();
		}, function() {
			(this).swiper.autoplay.start();
	});
})(jQuery);