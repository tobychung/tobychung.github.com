$(function(){


	var $window = $(window);


//------ 偵測scroll ------//
	$window.on('scroll',function(e){
		
		
		var pos = $window.scrollTop();

		if(pos>=400){

			$('.header-wrap').css({display:'none'});
		}

		else{

			$('.header-wrap').css({display:''});
		}



		console.log('現在滾了',pos,'px');

	});


//------ 歪歪前端進場 ------//

	$('.header_title').addClass('fadeInDown animated');

//------ code類型 ------//


	var highlight_width = $('.highlight').width();

	$('.content').find('.code_type').css({width:highlight_width});
	



});