/**
 * 
 */

/*loginCheck = function(){
	$.ajax({
		url : '/HelloWorld/firstPage/mainPage.do',
		type : 'post',
		data : {"loginId" : loginId,
				"loginPassword" : loginPassword
			    },
		dataType : 'json',
		success : function(res){
//			if(loginId = res.val && loginPassword = res.val){
//				alert("로그인 성공!")
//			}else{
//				alert("로그인 실패")
//			}
			// loginPassword = $('#loginPassword').val();
		},
		error : function(xhr){
			alert("상태 : " + xhr.status);
		}
	})
}
*/

openMyInfomationHome = function(){
	$.ajax({
		url : '/HelloWorld/myPage/myInfomationHome.do',
		type : 'post',
		data : { },
		dataType : 'html',
		success : function(res){
			// alert출력
			alert("성공!")
			
			// 출력
			console.log(res);
			$('#outPutMainView').empty();
			$('#outPutMainView').append(res);
		},
		error : function(xhr){
			alert("상태 : " + xhr.status);
		}
	})	
}



myInfomationUpdate = function(){
	$.ajax({
		url : '/HelloWorld/myPage/myInfomationUpdate.do',
		type : 'post',
		data : { },
		dataType : 'html',
		success : function(res){
			// alert출력
			alert("성공!")
			
			// 출력
			console.log(res);
			$('#outPutMainView').empty();
			$('#outPutMainView').append(res);
		},
		error : function(xhr){
			alert("상태 : " + xhr.status);
		}
	})		
}



passwordUpdate = function(){
	$.ajax({
		url : '/HelloWorld/myPage/passwordUpdate.do',
		type : 'post',
		data : { },
		dataType : 'html',
		success : function(res){
			// alert출력
			alert("성공!")
			
			// 출력
			console.log(res);
			$('#outPutMainView').empty();
			$('#outPutMainView').append(res);
		},
		error : function(xhr){
			alert("상태 : " + xhr.status);
		}
	})	
}














