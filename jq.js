$(function() {
	var carouselList = $('#carousel ul');
	setInterval(changeSlide, 3000);
	function changeSlide() {
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide)
		function moveFirstSlide() {
			var firstItem = carouselList.find('li:first');
			var lastItem = carouselList.find('li:last');
			lastItem.after(firstItem);
			carouselList.css({marginLeft:0});
		};
	};

	$('#right').click(function() {
		clearInterval(startAction);
		changeLastSlide();
	});
	
	$('#left').click(function() {
		clearInterval(startAction);
		changeSlide();
	});
	
	function changeLastSlide() {
		carouselList.animate({'marginRight':-400}, 500, moveLastSlide)
		function moveLastSlide() {
			var firstItem = carouselList.find('li:first');
			var lastItem = carouselList.find('li:last');
			firstItem.after(lastItem);
			carouselList.css({marginRight:0});
		};
	};
});