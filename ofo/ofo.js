$(".header_tab li").hover(function(){
	$(this).children('div').animate({"width":$(this).width()},400);
},function(){
	$(this).children('div').stop(false,true).animate({"width":"0px"},400);
})
var mySwiper = new Swiper('.swiper-container', {
	autoplay: 5000,//可选选项，自动滑动
	pagination : '.swiper-pagination',
	paginationType : 'bullets',
	paginationClickable :true,
	// scrollbar: '.swiper-scrollbar',
})
$(".wx_logo").hover(function() {
	$('.wx_ewm').animate({
		opacity: 1,},
		500);
}, function() {
	$('.wx_ewm').stop(false,true).animate({
		opacity: 0,},
		600);
});