		    //底部的轮播图
			var i = 0;
			
			function fn() {
				if(i == 2) {
					i = 0;
				} else {
					i++;
				}
				$(".main-left-lb img").eq(i).fadeIn().siblings().fadeOut();
			}
			timer = setInterval(fn, 3000);
			//返回顶部
			$('.db').click(function(){
	            	function fn(){
	            		var a = document.body.scrollTop|| window.pageYOffset||document.documentElement.scrollTop;
	            		window.scrollBy(0,-200);
	            		if(a==0){
	            			clearInterval(time);
	            		}
	            	}
	            	time=setInterval(fn,30);
	        })
			//点击4个按钮到达相应的位置
		    $('#gx').click(function(){
            	function fn32(){
            		var a = document.body.scrollTop|| window.pageYOffset||document.documentElement.scrollTop;
            		window.scrollBy(0,20);
            		
            		if(a>=1000){
            			clearInterval(time33);
            		}
            	}
            	time33=setInterval(fn32,20);
            	
            })
		    $('#jiesao').click(function(){
            	function fn32(){
            		var a = document.body.scrollTop|| window.pageYOffset||document.documentElement.scrollTop;
            		window.scrollBy(0,50);
            		
            		if(a>=1800){
            			clearInterval(time33);
            		}
            	}
            	time33=setInterval(fn32,10);
            	
            })
		    $('#zhinan').click(function(){
            	function fn32(){
            		var a = document.body.scrollTop|| window.pageYOffset||document.documentElement.scrollTop;
            		window.scrollBy(0,50);
            		
            		if(a>=2800){
            			clearInterval(time33);
            		}
            	}
            time33=setInterval(fn32,10);
            	
            })
		    $('#seanon').click(function(){
            	function fn32(){
            		var a = document.body.scrollTop|| window.pageYOffset||document.documentElement.scrollTop;
            		window.scrollBy(0,50);
            		
            		if(a>=3650){
            			clearInterval(time33);
            		}
            	}
            	time33=setInterval(fn32,10);
            	
           })
		    //控制鼠标滚动后出现的距离
		        window.onscroll = function() {
                    	var sstop = document.body.scrollTop || window.pageYOffset || document.documentElement.scrollTop;
                    	if(sstop > 150) {
                    		$('.wrap').css('display','block');
                    	} else {
                    		$('.wrap').css('display','none');
                    	}
                    	if(sstop > 150) {
                    		$('.db').css('display','block');
                    	} else {
                    		$('.db').css('display','none');
//                  		$('.db').animate({"display":"none"},1000);
                     }
                    	if(sstop >1570) {
                    		$('.main2 ul').css('display','block');
                    	}
                    	if(sstop >2470) {
                    		$('.main3-center').css('display','block');
                    	}
                }
		        //控制顶部和底部的出现
		   
		   
		   
		        
				$('.main-right-bottom-right img').click(function(){
					location.href = "ny.html?id="+$(this).prop('id');
				});
//				alert($('.main3-center').position().top);
                var k=0;
				function fn1() {
					if(k == 3) {
						k = 0;
					} else {
						k++;
					}
					$(".main5-bottom img").eq(k).fadeIn().siblings().fadeOut();
				}  
				$('.left-tu').click(function() {
						if(k < 0 ) {
							k = 3;
						} else {
							k--;
						}
						$(".main5-bottom img").eq(k).fadeIn().siblings().fadeOut();
						clearTimeout(timer);
						timer = setInterval(fn1, 3000); 
					});
					$('.right-tu').click(function() {
						if(k == 3) {
							k = 0;
						} else {
							k++;
						}
						$(".main5-bottom img").eq(k).fadeIn().siblings().fadeOut();
						clearTimeout(timer);
						timer = setInterval(fn1, 3000); 
					});
					timer = setInterval(fn1, 3000);  


                    //上边的轮播
			        var lunbo=0;
					function fn6() {
						if(lunbo == 3) {
							lunbo  = 0;
						} else {
							lunbo ++;
						}
						
						$(".dalunbo-zi div").eq(lunbo).fadeIn().siblings().fadeOut();
						$(".dalunbo-tu img").eq(lunbo).fadeIn().siblings().fadeOut();
						$('.dalunbo-li ul li').eq(lunbo).addClass('li-color').siblings().removeClass();
					}
					timers5 = setInterval(fn6, 3000);
					$('.dalunbo-li ul li').click(function(){
						$(".dalunbo-tu img").eq($(this).index()).fadeIn().siblings().fadeOut();
						$('.dalunbo-li ul li').eq($(this).index()).addClass('li-color').siblings().removeClass();
						$(".dalunbo-zi div").eq($(this).index()).fadeIn().siblings().fadeOut();
						clearTimeout(timers5);
						timers5 = setInterval(fn6, 3000);
						lunbo=$(this).index();
					});
					//登录
					$('.feel-right span').eq(0).click(function(){
						location.href = "dl.html";
					})