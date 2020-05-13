//alert($('#user p').text())  ;     
         $('#username').blur(function(){
         	var patt = /^[a-zA-Z0-9_-]{4,16}$/;
         	$('#user p').html("");
         	if(patt.test($('#username').text())==false){
		    $('#user p').text("用户名错误");
			return false;
			}
         	return true;
         });
         $('#password').blur(function(){
         	var patt=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/;
         	$('#pass p').html("");
         	if(patt.test( $('#password').val())==false){
			$('#pass p').text("密码错误");
			return false;
			}
		    return true;
         });
          $('#qrpassword').blur(function(){
         	$('#qrpass p').html("");
         	if($('#password').val()!=$('#qrpassword').val()){
			$('#qrpass p').text("密码不一致");
			return false;
			}
		    return true;
//alert($('#password').val());
         });
          $('#email').blur(function(){
         	var patt= /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/; 
         	$('#em p').html("");
         	if(patt.test( $('#email').val())==false){
			$('#em p').text("邮箱格式错误");
			return false;
			}
		    return true;
         });
         $('.feel-right span').eq(0).click(function(){
					location.href = "index.html";
				})
         $('.dl1-6 input').click(function(){
					location.href = "dl.html";
				})