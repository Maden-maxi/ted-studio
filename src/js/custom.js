new WOW().init();
$(document).ready(function() {
	$('.bxslider').bxSlider({
		auto: true,
		captions: true,
		slideWidth: 220,
	    minSlides: 1,
	    maxSlides: 4	,
	    slideMargin: 10
	});
	$('.bx-wrapper').css('max-width','100%');
	$('.tabs__controls-item').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		var item = $(this).closest('.tabs__controls-item'),
			contentItem = $('.tabs__item'),
			itemPosition = item.index();
		contentItem.eq(itemPosition)
			.add(item)
			.addClass('active')
			.siblings()
			.removeClass('active');
	});
	//Плавный скролл по якорям
	$('a[href^="#"]').click(function(){
		var elementClick = $(this).attr("href"),
			destination = $(elementClick).offset().top;
			$('html, body').animate( {scrollTop: destination }, 1000 );
		return false;
	});
	//input mask
	$("#phone").inputmask("mask", {"mask": "(999) 999-9999"});
});
