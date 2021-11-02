var checkScrollSpeed = (function(settings){
	settings = settings || {};

	var lastPos, newPos, timer, delta, 
			delay = settings.delay || 50; // in "ms" (higher means lower fidelity )

	function clear() {
		lastPos = null;
		delta = 0;
	}

	clear();

	return function(){
		newPos = window.scrollY;
		if ( lastPos != null ){ // && newPos < maxScroll 
			delta = newPos -  lastPos;
		}
		lastPos = newPos;
		clearTimeout(timer);
		timer = setTimeout(clear, delay);
		return delta;
	};
})();


const maxSkew = 70;

let elem = document.querySelectorAll('.skewOnScroll');

const setSkew = (skew) => {
	elem.forEach(element => {
		element.style.transform = `skew(${skew}deg)`;
	});
}


let setBack = debounce(function() {
	elem.forEach(element => {
		element.style.transform = `skew(0deg)`;
	});
}, 50, false)


function debounce(func, wait, immediate) {
  let timeout;

  return function executedFunction() {
    const context = this;
    const args = arguments;

    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
};



// listen to "scroll" event
window.addEventListener('scroll', function(){
    let speed = checkScrollSpeed();
	if (speed > maxSkew) speed = maxSkew;
	if (speed < -maxSkew) speed = -maxSkew;
	setSkew( speed / 2);
	setBack()
})