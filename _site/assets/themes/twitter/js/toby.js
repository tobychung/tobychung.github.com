$(function(){


	var $window = $(window);


//------ 偵測scroll ------//
	// $window.on('scroll',function(e){
		
		
	// 	var pos = $window.scrollTop();

	// 	//文章裡//
	// 	if('.content.span4'){

	// 		if(pos>=400){

	// 			$('.header-wrap').css({backgroundImage:'url(../../../../../../assets/themes/twitter/img/contBG3.jpg)',height:'1200px'})
	// 							 .find('.header_title').hide();
	// 			$('.contentBG').css({backgroundImage: 'none'});

	// 			var content_height = $('.container').height();
	// 			var footer_offset = content_height - 1649 + 'px';
				
	// 			if(content_height>=1200){

	// 				$('.footer').css({marginTop:footer_offset});

	// 			}
				
				
				
	// 		}

	// 		if(pos<=400){

	// 			$('.header-wrap').css({backgroundImage:'',height:''})
	// 							 .find('.header_title').css({display:'block'});
				
	// 			$('.contentBG').css({backgroundImage: ''});
	// 		}



	// 	}

	// 	//文章外//
	// 	else{

	// 		if(pos>=400){

	// 			$('.header-wrap').css({backgroundImage:'url(../assets/themes/twitter/img/contBG3.jpg)',height:'1200px'})
	// 							 .find('.header_title').hide();
	// 			$('.contentBG').css({backgroundImage: 'none'});


	// 			var content_height = $('.container').height();
	// 			var footer_offset = content_height - 1649 + 'px';
				
	// 			if(content_height>=1200){

	// 				$('.footer').css({marginTop:footer_offset});

	// 			}


	// 		}

	// 		if(pos<=400){

	// 			$('.header-wrap').css({backgroundImage:'',height:''})
	// 							 .find('.header_title').css({display:'block'});
				
	// 			$('.contentBG').css({backgroundImage: ''});
	// 		}
		
	// 	}


	// 	console.log('現在滾了',pos,'px');

	// });


//------ 歪歪前端進場 ------//

	$('.header_title').addClass('fadeInDown animated');

//------ code類型 ------//


	var highlight_width = $('.highlight').width();

	$('.content').find('.code_type').css({width:highlight_width});
	



});