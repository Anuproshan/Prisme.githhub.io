
// ======================================
// Opens, This Scripts Is For HeaderMenu
// ======================================
$(document).ready(function(){
$(window).scroll(function(){
if($(this).scrollTop()>10){
$('header').addClass('sticky');
$('header .navbar .navbar-brand img').attr('src','assets/images/__Logo.png');
}
else{
$('header').removeClass('sticky');
$('header .navbar .navbar-brand img').attr('src','assets/images/__Logo.png');
}
});
});
// =============================================
//     Closes, This Script is For HeaderMenu
// =============================================
$(document).ready(function(){
$(window).scroll(function(){
if ($(this).scrollTop() > 10) {
$('#btnTop').fadeIn(800);
}
else {
$('#btnTop').fadeOut(800);
}
});
$('#btnTop').click(function(){
$('html ,body').animate({scrollTop: 0}, 800);
});
});
//======= This Scripts is for Owl Carousel ====

$(document).ready(function(){
$('.crystal').owlCarousel({
loop:true,
margin:10,
nav:false,
dots:false,
padding:5,
autoplay:true,
autoplayTimeout:6500,
responsive:{
	1000:{
		items:6
	},
	768:{
		items:4
	},
	320:{
		items:1
	}
}
});
});
//====== Carousel Slider ======
$(document).ready(function(){
$('.social_carousel').owlCarousel({
loop:true,
margin:10,
nav:false,
dots:false,
padding:5,
autoplay:true,
autoplayTimeout:6500,	
responsive:{
	1000:{
		items:3
	},
	768:{
		items:2
	},
	320:{
		items:1
	}
}
});
});

