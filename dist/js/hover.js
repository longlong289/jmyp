//nav2的水平线
$(function(){
	let $aLi=$('.mail_nav_list li');
	for(let i=0;i<$aLi.length;i++){		
		$aLi[i].onmouseover=function(){
			$(this).addClass('hover').siblings('li').removeClass('hover');
		};
	};
})

$(function(){
	 let $aA=$('.footer_links li a');
	for(let i=0;i<$aA.length;i++){
		$aA[i].onmouseover=function(){
			$(this).stop(true).animate({
				"text-indent":"1em"
			},200)
		};
		$aA[i].onmouseout=function(){
			$(this).stop(true).animate({
				"text-indent":"0"
			},200)
		};
	};
})
$(function(){
	let $aDiv=$('.tuijianAd');
	for(let i=0;i<$aDiv.length;i++){
		$aDiv[i].onmouseover=function(){
			$(this).animate({
				"left":"-10"
			},200)
		};
		$aDiv[i].onmouseout=function(){
			$(this).animate({
				"left":"0"
			},200)
		};
	};
})
/*$(function(){
	$aDiv=$('.tuijianAd');	
	for(let i=0;i<$aA.length;i++){
		$aDiv[i].onmouseover=function(){
			bufferMove($(this),'left',-10px);
		};
		$aDiv[i].onmouseout=function(){
			bufferMove($(this),'left',0px);
		};
	};
})*/

/*$(function(){
	$aLi=$('.ibar_main ul li');
	for(let i=0;i<$aLi.length;i++){		
		$aLi[i].onmouseover=function(){
			$(this).addClass('hoverbg').siblings('li').removeClass('hoverbg');
			if($(this).$('.mp_tooltip')){
				$(this).$('.mp_tooltip').animate({
 				'visiblity':'visible',
 				'left':'-92px',
 				'opacity':'1'
 				});
			}; 			
		};
		$aLi[i].onmouseout=function(){
			$(this).removeClass('hoverbg');
			if($(this).$('.mp_tooltip')){
				
				$(this).$('.mp_tooltip').animate({
	 				'visiblity':'hidden',
	 				'left':'-120px',
	 				'opacity':'0'
	 			});
 			};
		};
	};
})
*/
/*function bufferMove(obj,attr,target){
				clearInterval(obj.timer);//多物体运动，需要每个盒子添加一个定时器属性。
				obj.timer=setInterval(function(){
					//求当前值 curr:当前值
					var curr=parseInt(getstyle(obj,attr));
					//求速度
					var speed=(target-curr)/10;
					speed=speed>0?Math.ceil(speed):Math.floor(speed);
					
					//判断停止还是运动
					if(curr==target){
						clearInterval(obj.timer);
					}else{
						obj.style[attr]=curr+speed+'px';
					}
				},20)
			}*/
			

