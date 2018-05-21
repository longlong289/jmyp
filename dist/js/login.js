$(function(){
	$ptbtn=$('#radio_normal');
	$dybtn=$('#radio_dynamic');
	$user=$('#username');
	$pass=$('.password');
	$ptbtn.on('click',function(){
		$('#login-dynamic_form').hide();
		$('#login-user-form').show();
	})
	$dybtn.on('click',function(){
		$('#login-dynamic_form').show();
		$('#login-user-form').hide();
	})
	$user.on('focus',function(){
		$(this).next('div').show();
	})
	$user.on('blur',function(){
		$(this).next('div').hide();
	})
	$pass.on('focus',function(){
		$(this).next('div').show();
	})
	$pass.on('blur',function(){
		$(this).next('div').hide();
	})
})

$(function(){ 
	
	function addCookie(key,value,day){
					var date=new Date();//创建日期对象
					date.setDate(date.getDate()+day);//过期时间：获取当前的日期+天数，设置给date
					document.cookie=key+'='+encodeURI(value)+';expires='+date;//添加cookie，设置过期时间
				}
				$('#btn').on('click',function(){
					var $username=$('#username').val();//用户名
					var $password=$('.password').val();//密码
					console.log($password);
					
					$.ajax({
						type:'post',
						url:'php/login.php',
						data:{//将用户名和密码传输给后端
							name:$username,
							pass:$password
						},
						success:function(data){//请求成功，接收后端返回的值
							if(!data){//用户名或者密码错误
								$('#error').html('用户名或者密码错误');
								$('#password').val('');
							}else{//成功
								addCookie('UserName',$username,7);
								location.href='index.html';
							}
						}
					})
				});
				
})				