require('./lib/parallax.js');
var bg = document.getElementById('bg');
var parallax = new Parallax(bg);

require('./lib/ruler.js');
require('./lib/dom.js');

var img1 = Qid('img1');
var img2 = Qid('img2');
var img3 = Qid('img3');
var img4 = Qid('img4');

var transformStyle = function(em){
	return 'translate3d(0px,'+em+'em,0px)';
}

addEvent(window , 'scroll' , function() {
	var persentage = scroller.getY() / scroller.getMaxY();
	img1.style.transform = transformStyle(-4 * persentage);
	img3.style.transform = transformStyle(-8 * persentage);
	img2.style.transform = transformStyle(-4 * persentage);
	img4.style.transform = transformStyle(-8 * persentage);
});
