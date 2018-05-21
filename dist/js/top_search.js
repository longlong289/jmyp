$(function(){
	$(window).scroll(function(){
		var scroll_top=$(window).scrollTop();		
		if(scroll_top>=$(window).height()){
			$('.top_search').fadeIn();
			$('.top_search_bg').fadeIn();
			$('.mpbtn_gotop').show();
		}else if(scroll_top<$(window).height()){
			$('.top_search_bg').fadeOut();
			$('.top_search').fadeOut();
			$('.mpbtn_gotop').hide();
		}
	});
})

