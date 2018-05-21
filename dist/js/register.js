$(function(){
	$use=$('#mobile');
	$useyz=$('#mobile_verify');
	$pass1=$('#password');
	$pass2=$('#password2');
	$use.on('focus',function(){
		$(this).css({
			'box-shadow': '0 0 4px 1px rgba(32,157,230,.4)',
    		'border-color': '#A5D4ED'
		}).siblings('.focus_text').show();

	})
	$use.on('blur',function(){
		$(this).css({
			'box-shadow': '0',
    		'border-color': '#fff'
		}).siblings('.focus_text').hide();
	})
	$useyz.on('focus',function(){
		$(this).css({
			'box-shadow': '0 0 4px 1px rgba(32,157,230,.4)',
    		'border-color': '#A5D4ED'
		}).siblings('.focus_text').show();
	})
	$useyz.on('blur',function(){
		$(this).css({
			'box-shadow': '0',
    		'border-color': '#fff'
		}).siblings('.focus_text').hide();
	})
	$pass1.on('focus',function(){
		$(this).css({
			'box-shadow': '0 0 4px 1px rgba(32,157,230,.4)',
    		'border-color': '#A5D4ED'
		}).siblings('.focus_text').show();
		$(this).siblings('.focus_text').children().not('p').hide();
	})
	$pass1.on('blur',function(){
		$(this).css({
			'box-shadow': '0',
    		'border-color': '#fff'
		}).siblings('.focus_text').hide();
		
	})
	$pass2.on('focus',function(){
		$(this).css({
			'box-shadow': '0 0 4px 1px rgba(32,157,230,.4)',
    		'border-color': '#A5D4ED'
		}).siblings('.focus_text').show();
	})
	$pass2.on('blur',function(){
		$(this).css({
			'box-shadow': '0',
    		'border-color': '#fff'
		}).siblings('.focus_text').hide();
	})
	console.log($('.pass .focus_text'));	
	
	$pass1.on('input',function(){
		let $reg1=/^(1)\d{10}$/;
		let $reg2=/\d+/g;
		let $reg3=/[a-zA-Z]+/g;
		let $reg4=/\W+/g;
		let $num=0;
		console.log($pass1.val());
		if($pass1.val().length>6&&$pass1.val().length<20){
			$pass1.siblings('.focus_text').children('p').hide();
			$('.safe').show();
			console.log($('.safe'));
			if($reg2.test($pass1.val())){
				$num++;
			}
			if($reg3.test($pass1.val())){
				$num++;
			}
			if($reg4.test($pass1.val())){
				$num++;
			}
			console.log($num);
			switch($num){
				case 1: $('.pw_level').eq(0).css({
					'background':'yellow'
				}).siblings().css({
					'background':'#d0cecc'
				});break;
				case 2:  $('.pw_level').eq(1).css({
					'background':'orange'
				}).siblings().css({
					'background':'#d0cecc'
				});break;
				case 3:  $('.pw_level').eq(2).css({
					'background':'green'
				}).siblings().css({
					'background':'#d0cecc'
				});break;
			}
		}else{
			
		}
	})
	
	
})
$(function(){
				var bstop=true;//不通过
				var usereg=/^(1)\d{10}$/;
				$('.username').on('blur',function(){
					var username=$(this).val();//获取用户名值
					if(username!=''){//检测用户名是否为空
						if(usereg.test(username)){//检测用户名是否满足正则
							//将当前的用户名给后端，后端和数据库进行匹配，不管是否存在，后端返回结果
							$.ajax({
								type:'post',
								url:'php/reg.php',
								data:{
									name:username//获取用户名给后端
								},
								success:function(d){
									if(d){
										$('.username').next('.focus_text').css('color','red').html('用户名已存在').show();
										bstop=true;
									}else{
										$('.username').next('.focus_text').css('color','green').html('√').show();
										bstop=false;
									}
								}
							})
						}else{
							$(this).next('div').css('color','red').html('格式不正确').show();
							bstop=true;
						}
					}else{
						$(this).next('div').css('color','red').html('用户名不能为空').show();
						bstop=true;
					}
				});
				$pass2.on('blur',function(){
					if($pass1.val()!=$pass2.val()){
						$(this).next('div').css('color','red').html('密码再次输入错误').show();
						bstop=true;
					}else{
						bstop=false;
					}
				})
				
				
				$('form').on('submit',function(){//验证不通过无法提交的
					if(bstop){
						return false;//阻止按钮跳转。
					}
				});
});