// 存放星期的数组
var weekday = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];

// 循环执行显示时间函数
function showTime(obj){
	var _this = obj;
	// 先显示一遍
	nowTime(_this);
	var timer = setInterval(function(){
		nowTime(_this);
	},500);
}

// 在对象内显示时间
function nowTime(obj){
	var _that = obj;
	var now = new Date();
	var year = now.getFullYear(),
		month = now.getMonth() + 1,
		date = now.getDate(),
		wd = now.getDay(),
		h = now.getHours(),
		m = now.getMinutes(),
		s = now.getSeconds();
	h = checkTime(h);
	m = checkTime(m);
	s = checkTime(s);
	_that.innerHTML = year + "年" + month + "月" + date + "日" + "  " + weekday[wd] + "  " + h + ":" + m + ":" + s;
}

// 给小于10的数前加0
function checkTime(i){
	if(i < 10){
		i = "0" + i;
	}
	return i;
}

// 计算倒计时天数
function countDays(tString){
	var targetDate = new Date(tString),
		now = new Date(),
		lefttime = (targetDate.getTime() - now.getTime())/(24*60*60*1000);
	if(lefttime > 0){
		return Math.ceil(lefttime);
	}else{
		return 0;
	}
}

// 循环执行倒计时显示
function showDown(obj,tString){
	clearInterval(timer);
	var _this = obj;
	// 先显示一遍
	if (countDown(tString) == '结束') {
			_this.innerHTML = "已结束";
		}else{
			_this.innerHTML = "倒计时：" + countDown(tString);
		}
	var timer = setInterval(function(){
		if (countDown(tString) == '结束') {
			_this.innerHTML = "已结束";
		}else{
			_this.innerHTML = "倒计时：" + countDown(tString);
		}	
	},500)
}

// 返回倒计时
function countDown(tString){
	var endDate = new Date(tString);
		nowDate = new Date(),
		lefttime = parseInt((endDate.getTime() - nowDate.getTime())/1000),
		d = parseInt(lefttime/(24*60*60)),
		h = parseInt(lefttime/(60*60)%24),
		m = parseInt(lefttime/60%60),
		s = parseInt(lefttime%60);
	if(lefttime <= 0){
		var rString = "结束";
	}else{
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		var rString = d + "天" + h + "时" + m + "分" + s + "秒";
	}
	
	return rString;
}