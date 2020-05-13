			var data = location.href;
//			console.log(data);
			var arr = data.split("?");
//			console.log(arr);
			var name = arr[1];
//			console.log(name);//id=img1
			var imgId = name.substring(name.indexOf("=")+1);
//			console.log(imgId);     
           $.ajax({
            	type:"get",
            	dataType:"text",
            	async:true,
            	url:"js/new_file.json",
            	success:function(re){
            		var jsonObj=JSON.parse(re);
              		$('.gw-cen-right-tu img').prop('src','img/' + jsonObj[imgId][0]);
					$('#gw-cen-left-top').html(jsonObj[imgId][1]);
					$('#gw-cen-left-botom').html(jsonObj[imgId][2]);
					$('.gw-cen-right-zi p').html(jsonObj[imgId][3]);
					$('.gw-cen-right-zi2 p').html(jsonObj[imgId][4]);
					$('.gw-cen-right-zi3-a a').html(jsonObj[imgId][5]);
					$('.mpname').html(jsonObj[imgId][6]);
					$('.money-right').html(jsonObj[imgId][7]);
					var gwnum=1;
		            $('.gwc-cinp input').val(gwnum);
		            var money = jsonObj[imgId][7].substring(jsonObj[imgId][7].indexOf("￥")+1);
            	}
           })
           $('.feel-right span').eq(0).click(function(){
					location.href = "index.html";
			})
           
           
           
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
                    	}
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
           $('#gm').click(function(){
					location.href = "gwc.html?id="+imgId+"js";
			});
               
