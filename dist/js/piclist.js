//链接php
$(function(){
	$.ajax({
		url: "php/piclist.php"
	})
	.then(function(d){
		let data = JSON.parse(d);
		console.log(d);
		let sUl = `<ul class="clear">`;
		let sOl = `<ol class="a_btn">`;
		$.each(data,function(i,cont){
			sUl+=`<li><a href="#" style={background-image: ${cont.url};}>家居生活</a></li>`;
			sOl+= `<li><a href="#"></a></li>`;
		});
		sUl+="</ul>";
		sOl+="</ol>";
		sbtn = `<button class="btn_left">&lt;</button>
				<button class="btn_right">&gt;</button>-->`;
		$box = $(".banner");
		$box.html(sUl + sOl + sbtn);
		new Lunbo($box);
	});
})
