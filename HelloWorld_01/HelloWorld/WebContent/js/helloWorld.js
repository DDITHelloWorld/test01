/**
 * 
 */

loginCheck = function(){
	$.ajax({
		url : '/HelloWorld/firstPage/mainPage.do',
		type : 'post',
		data : {"loginId" : loginId,
				"loginPassword" : loginPassword
			    },
		dataType : 'json',
		success : function(res){
			// loginId = $('#loginId').val();
			// loginPassword = $('#loginPassword').val();
			alert("로그인 성공!")
		},
		error : function(xhr){
			alert("상태 : " + xhr.status);
		}
	})
}