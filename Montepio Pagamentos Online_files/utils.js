function busy() {
	var busyDiv = document.createElement('div');
	var el = document.getElementsByTagName('body')[0];
	
	try {
		var windowWidth = window.innerWidth;
		var windowHeight = window.innerHeight;
		if(!windowWidth) {
			windowWidth = document.documentElement.offsetWidth;
			windowHeight = document.documentElement.offsetHeight;
		}
		
		var bodyHeigth = el.offsetHeight;
		
		var imgWidth = spinUrl.width;
		var imgHeight = spinUrl.height;

		busyDiv.style['background'] = '#fff';
		busyDiv.style['opacity'] = '0.6';
		busyDiv.style['filter'] = 'alpha(opacity=60)';
		busyDiv.style['z-index'] = 'auto';
		busyDiv.style['position'] = 'absolute';
		busyDiv.style['width'] = '98%';
		busyDiv.style['height'] = bodyHeigth + "px";

		var wrapper = document.createElement('div');
		wrapper.style['position'] = 'fixed';
		wrapper.style['left'] = (Math.round(windowWidth / 2) - (imgWidth/2)) + "px";
		wrapper.style['top'] = ((windowHeight / 2) - (imgHeight/2)) + "px";

		wrapper.appendChild(spinUrl);

		busyDiv.appendChild(wrapper);

		el.insertBefore(busyDiv, el.firstChild);
	} catch (e) {
		throw e;
	}
	return true;
}

//Disable de um elemento
function disableElement(element){
	element.disabled=true;
	if(element.className == 'btnSimples'){
		element.className="btnSimplesDisabled";
	}
	else if(element.className == 'pinButton'){
		element.className="pinButtonDisabled";
	}
}