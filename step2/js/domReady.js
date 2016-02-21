// 会比window.onload快
function myReady(fn){
	// 现代浏览器，对DOMContentLoaded绑定事件
	if(document.addEventListener){
		document.addEventListener("DOMContentLoaded",fn,false);
	}else{
		IEContentLoaded(fn);
	}

	// IE模拟
	function IEContentLoaded(fn){
		var done = false,
			d = window.document;

		// 只执行一次
		var init = function(){
			if(!done){
				done = true;
				fn();
			}
		};

		(function(){
			try{
				// DOM树未创建之前调用doScroll会报错
				d.documentElement.doScroll('left');
			}catch(e){
				// 延迟循环
				setTimeout(arguments.callee);
				return;
			}
			// 没有错误表示DOM树创建完毕，立即执行
			init();
		})();

		// 监听document加载状态
		d.onreadystatechange = function(){
			// 如果用户在domReady之后绑定则立即执行
			if(d.readystate == 'complete'){
				d.onreadystatechange = null;
				init();
			}
		}
	}
}