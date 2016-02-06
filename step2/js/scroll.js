function scrollUp_coherent(obj1,obj2,speed){
	function scrollStart(){
		if(obj1.scrollTop >= obj2.offsetHeight){
			obj1.scrollTop = 0;
		}else{
			obj1.scrollTop++;
		}
	}

	obj1.onmouseover = scrollStop;
	obj1.onmouseout = scrollRestart;

	function scrollStop(){
		clearInterval(timer);
	}

	function scrollRestart(){
		timer = setInterval(scrollStart,speed);
	}

	var timer = setInterval(scrollStart,speed);
}




