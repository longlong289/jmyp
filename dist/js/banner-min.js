function Lunbo(){this.right=$(".sc_next")[0],this.left=$(".sc_prev")[0],this.pic=$(".new_admall_content li"),this.btns=$(".sc_index span"),this.timer=null,this.num=0;let t=this;console.log(this.left),console.log(this.btns),$(".banner_top_left").hover(function(){$(".jtd,.jtx").fadeIn(200),clearInterval(t.timer)},function(){$(".jtd,.jtx").fadeOut(200),t.autoplay()});for(let n=0;n<this.btns.length;n++)this.btns[n].onclick=function(){t.num=$(this).index(),t.tab()};this.left.onclick=function(){console.log(t),t.num++,t.num==t.btns.length&&(t.num=0),t.tab()},this.right.onclick=function(){console.log(t),t.num--,t.tab()},this.tab=function(){console.log(111),t.btns.eq(this.num).addClass("current").siblings().removeClass("current"),t.pic.eq(this.num).show().siblings().hide(),t.num>2&&(num=0),t.num<0&&(num=2)},this.autoplay=function(){t.timer=setInterval(function(){t.left.onclick()},2e3)}}$(function(){$.ajax({url:"php/banner.php"}).then(function(t){let n=JSON.parse(t),i="";$.each(n,function(t,n){i+=`<li style="position:absolute;display:block;z-index:1;top:0;left:0">\n\t\t\t<a href="#"><img src=${n.src}></a></li>`}),$oUl=$(".new_admall_content"),$oUl.html(i),new Lunbo})});