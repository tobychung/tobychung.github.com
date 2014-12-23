$(function(){

	var $window = $(window);
	var contact = $(".contact");
	var contactX = contact.offset().left;
	var plus = $('.plus_all');
	var plusX = contactX + 230 + 'px';
		
	plus.css({left:plusX});

	
	$window.resize(function(){	
		
		var contact = $(".contact");
		var contactX = contact.offset().left;
		var plus = $('.plus_all');
		var plusX = contactX + 230 + 'px';
			
		plus.css({left:plusX});

	});
	



});