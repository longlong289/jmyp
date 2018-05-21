$(function(){
	$.ajax({
		url: "php/tab.php"
	})
	.then(function(d){
		let data = JSON.parse(d);
		console.log(d);
		$aUL=$('.brand_wall_left');
		console.log($aUL);
		$html1='';
		$html2='';
		$html3='';
		$html4='';
		$html5='';
		$html6='';
		$.each(data,function(i,cont){
			$html1+=`<li><a href="#"><img src=${cont.url1}</a></li>`;
			$html2+=`<li><a href="#"><img src=${cont.url2}</a></li>`;
			$html3+=`<li><a href="#"><img src=${cont.url3}</a></li>`;
			$html4+=`<li><a href="#"><img src=${cont.url4}</a></li>`;
			$html5+=`<li><a href="#"><img src=${cont.url5}</a></li>`;
			$html6+=`<li><a href="#"><img src=${cont.url6}</a></li>`;
		});
		$aUL.eq(0).html($html1);
		$aUL.eq(1).html($html2);
		$aUL.eq(2).html($html3);
		$aUL.eq(3).html($html4);
		$aUL.eq(4).html($html5);
		$aUL.eq(5).html($html6);
		
	});
})
$(function(){
	$aLi=$('.brand_wall_left li');
	$aLi.hover(function(){
		$(this).css({
			'magrin-top':'-5px',
			'box-shadow':'0 0 8px 3px rgba(0,0,0,.2)',
			'transform': 'scale(1.03)'
		})
		
	},function(){
		$(this).css({			
			'magrin-top':'0px',
			'box-shadow':'none',
			'transform': 'scale(1)'
		})
	})
	console.log(1*118);
	$aA=$('.tab a');
	$aLl=$('.tab_li');
	$line=$('.arrow_line');
	console.log($aLl);
	$aA.hover(function(){
		$(this).addClass('current').siblings().removeClass('current');
		$aLl.eq($(this).index()).show().siblings('li').hide();
		$line.css({
			'left':+($(this).index()*118)+'px'
		})
	})
	
	
	$louti=$('.louti');
	$lotii=$('.lotii');
	$loutis=$('.louti span');
	console.log($lotii);
	console.log($loutis);
	$(window).on('scroll',function(){
		let $st=$(window).scrollTop();
		if($st>=200){
			$louti.show();
		}else{
			$louti.hide();
		}
	
		$lotii.each(function(index,element){
			let $top1=$lotii.eq(index).offset().top+200;
			if($top1>$st){
				$loutis.removeClass('active');
				$loutis.eq(index).addClass('active');
				return false;
			}
		});
	});
	console.log($('.noborder'));
	$('.noborder').on('click',function(){
		$('html,body').animate({
			scrollTop:0
		});
	});
	$loutis.not('.last').on('click',function(){
    	var $top=$lotii.eq($(this).index()).offset().top;	
		$('html,body').animate({
			scrollTop:$top
		});
	});
	
});

function addCookie(key,value,day){
				var date=new Date();//创建日期对象
				date.setDate(date.getDate()+day);//过期时间：获取当前的日期+天数，设置给date
				document.cookie=key+'='+encodeURI(value)+';expires='+date;//添加cookie，设置过期时间
			}
			function getCookie(key){
				var str=decodeURI(document.cookie);
				var arr=str.split('; ');
				for(var i=0;i<arr.length;i++){
					var arr1=arr[i].split('=');
	 				if(arr1[0]==key){
						return arr1[1];
					}
				}
			}
			function delCookie(key,value){
				addCookie(key,value,-1);//添加的函数,将时间设置为过去时间
			}
			
			
$(function(){
		if(getCookie('UserName')){
			$('.login').hide();
			$('.admin').show().find('span').html('你好,'+getCookie('UserName'));
		}
		$('.admin a').on('click',function(){
			delCookie('UserName','',-1);
			$('.admin').hide();
			$('.login').show();
		});
	});