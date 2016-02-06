function getByCname(cname,parent){
	var oParent = parent ? document.getElementById(parent) : document,
		eles = [],
		events = oParent.getElementsByTagName('*');

	for(var i = 0;i < events.length;i++){
		if(events[i].className == cname){
			eles.push(events[i]);
		}
	}
	return eles;
}