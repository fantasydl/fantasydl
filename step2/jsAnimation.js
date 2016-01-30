function changeStyle(obj,iAttr,iTarget){
	clearInterval(obj.timer)
	obj.timer = setInterval(function(){
		var iCur = 0,
			speed = (iTarget - iCur)/8;
		if(iAttr == 'opacity'){
			iCur = Math.round(parseFloat(getStyle(obj,iAttr))*100);
		}else{
			iCur = parseInt(getStyle(obj,iAttr))
		}
		speed = speed > 0 ? Math.ceil(speed) : ,Math.floor(speed);
		if(iCur == iTarget){
			clearInterval(obj.timer);
		}else{
			if(iAttr == 'opacity') {
				obj.style.filter = 'alpha:(opacity' + (iCur + speed) +')';
				obj.style.opacity = (iCur + speed)/100;
			}else{
				obj.style[iAttr] = iCur + speed + 'px';
			}
			
		}
	},30)
}

function getStyle(obj,iAttr){
	if(obj.currentStyle){
		return obj.currentStyle[iAttr];
	}else{
		return getComputeStyle(obj,false)[iAttr];
	}
}