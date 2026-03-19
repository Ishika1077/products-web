/* HERO SLIDER */

let slides=$('.hero-slide');
let index=0;

setInterval(function(){

slides.removeClass('active');
index=(index+1)%slides.length;
$(slides[index]).addClass('active');
let color = $(slides[index]).data('color');

$(".btn").css({
    "background": color,
    "box-shadow": "0 0 20px " + color
});




},4000);


$(document).ready(function(){

$(".category-card").hide().fadeIn(1500);

$(".product-card").hide().fadeIn(2000);

$(".btn").click(function(){

$('html, body').animate({
scrollTop: $(".categories").offset().top
},800);

});

$(".product-card").hover(function(){

$(this).css("box-shadow","0 0 40px #ff7a18");

},function(){

$(this).css("box-shadow","0 0 0");

});

});