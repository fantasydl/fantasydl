window.onload = function(){
	var container = document.getElementById('container'),
		list = document.getElementById('list'),
		buttons = document.getElementById('buttons').getElementsByTagName('span'),
		prev = document.getElementById('prev'),
		next = document.getElementById('next'),
		index = 1,
		animated = false,
		timer = null;

	function animate(offset){
		if(offset == 0){
			return;
		}
		animated = true;
		// 由于不是内联样式设置left，故需要通过offsetLeft来去距离左边的值
		var newLeft = parseInt(list.offsetLeft) + offset,
			// 总时间
			time = 300, 
			// 间隔时间
			interval = 10,
			// 速度
			speed = offset/(time/interval);

		function startA(){
			lLeft = list.offsetLeft;
			if((speed < 0 && lLeft > newLeft) || (speed > 0 && lLeft < newLeft)){
				list.style.left = lLeft + speed +'px';
				setTimeout(startA,interval);
			}else{
				if(newLeft > -600){
					list.style.left = -3000 + 'px';
				}else if(newLeft < -3000){
					list.style.left = -600 + 'px';
				}else{
					list.style.left = newLeft + 'px';
				}
				animated = false;
			}
		}

		startA();
	}

	function turnOn(){
		for (var i = 0,l = buttons.length; i < l; i++) {
			if(buttons[i].className == "on"){
				buttons[i].className = "";
				break;
			}
		}
		buttons[index - 1].className = "on";
	}

	prev.onclick = function(){
		if(animated){
			return;
		}
		if(index == 1){
			index = 5;
		}else{
			index--;
		}
		turnOn();
		animate(600);
	}
	next.onclick = function(){
		if(animated){
			return;
		}
		if(index == 5){
			index = 1;
		}else{
			index++;
		}
		turnOn();
		animate(-600);
	}

	for(var i = 0,l = buttons.length;i < l; i++){
		buttons[i].onclick = function(){
			if(animated){
            	return;
            }
			if(this.className == "on"){
				return;
			}
			var cIndex = this.getAttribute('index'),
				offset = -600 * (cIndex - index);
			animate(offset);
			index = cIndex;
			turnOn();
		}
	}

	function play(){
		timer = setInterval(next.onclick,2000);
	}

	function stop(){
		clearInterval(timer);
	}

	container.onmouseover = stop;
	container.onmouseout = play;

	play();
}

