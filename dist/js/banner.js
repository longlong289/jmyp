$(function(){
	 $.ajax({
		url: "php/banner.php"
	})
	.then(function(d){
		let data = JSON.parse(d);
		let $aLi='';
		$.each(data,function(i,cont){
			$aLi+=`<li style="position:absolute;display:block;z-index:1;top:0;left:0">
			<a href="#"><img src=${cont.src}></a></li>`;
		});	
		$oUl=$('.new_admall_content');
		$oUl.html($aLi);	
		new Lunbo();
	});

})



function Lunbo(){
	this.right=$('.sc_next')[0];
	this.left=$('.sc_prev')[0];
	this.pic=$('.new_admall_content li');
	this.btns=$('.sc_index span');
	this.timer=null;
	this.num=0;
	let that=this;
	console.log(this.left);
	console.log(this.btns);
	$('.banner_top_left').hover(function(){
		$('.jtd,.jtx').fadeIn(200);
		clearInterval(that.timer);
	},function(){
		$('.jtd,.jtx').fadeOut(200);
		that.autoplay();
	});
	for(let i=0;i<this.btns.length;i++){
		this.btns[i].onclick=function(){
			that.num=$(this).index();
			that.tab();
		}
	};
	this.left.onclick=function(){
		console.log(that);
		that.num++;
		if(that.num==that.btns.length){
			that.num=0;
		}
		that.tab();					
	};
	this.right.onclick=function(){
		console.log(that);
		that.num--;
		that.tab();
	};
	this.tab=function(){
		console.log(111)
		that.btns.eq(this.num).addClass('current').siblings().removeClass('current');
		that.pic.eq(this.num).show().siblings().hide();
		/*that.pic.attr()*/
		if(that.num>2){
			num=0;
		}
		if(that.num<0){
			num=2;
		}
	};
	this.autoplay=function(){
		that.timer=setInterval(function(){
			that.left.onclick();
		},2000)
	};
}
	


