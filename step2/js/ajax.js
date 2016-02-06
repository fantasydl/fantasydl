var request;
if (window.XMLHttpRequest) {
	request = new XMLHttpRequest(); // 非IE6及其以下
}else{
	request = new ActiveXObject("Microsoft.XMLHTTP");  // IE6及以下
}
request.open("POST","get.php",true);
request.send();
request.setRequestHeader("Content-Type"."application/x-www-form-urlencoded"); // POST必须有
request.onreadystatechange = function(){
	if(request.readystate === 4 && request.status === 200){ // 响应完成且请求通过
		var data = JSON.parse(request.responseText); // 解析JSON
		if(data.success){
			//做一些事情
		}else{
			alert("发生错误：" + data.msg);
		}
	}else{
		alert("发生错误：" + request.status);
	}
}