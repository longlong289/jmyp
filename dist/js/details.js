$(function(){
	var $smallpic=$('.small');
        var $fdj=$('.fdj');
        var $bigpic=$('.bigpic');
        var $img=$('#img1');
       // console.log($img.width());
        $smallpic.on('mouseover',function(){
           $fdj.css({'visibility':'visible'});
           $bigpic.css({'visibility':'visible'});
			$fdj.css({
				'width':$bigpic.width()*$smallpic.width()/$img.width()+'px',
				'height':$bigpic.height()*$smallpic.height()/$img.height()+'px'
			})
            var scale=$bigpic.width()/$fdj.width();//求比例,倍数关系。
            
            $(this).on('mousemove',function(ev){
                 var ev=ev||window.event;
                var l=ev.clientX-$fdj.width()/2;
                var t=ev.clientY-$fdj.height()/2;
                if(l<0){
                    l=0;
                }else if(l>=$smallpic.width()-$fdj.width()-2){
                    l=$smallpic.width()-$fdj.width()-2;
                }

                if(t<0){
                    t=0;
                }else if(t>=$smallpic.height()-$fdj.height()-2){
                    t=$smallpic.height()-$fdj.height()-2;
                }

				$fdj.css({
					'left':l+'px',
					'top':t+'px'
				})
				console.log($fdj.offset().height);

                $img.css({
                	'left':-scale*l+'px',
                	'top':-scale*t+'px'
                })
            })
        });

        $smallpic.on('mouseout',function(){
            $fdj.css({'visibility':'hidden'});
            $bigpic.css({'visibility':'hidden'});
        });
    
})