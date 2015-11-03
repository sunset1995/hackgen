require('./lib/parallax.js');
var bg = document.getElementById('bg');
var parallax = new Parallax(bg);

require('./lib/ruler.js');
require('./lib/dom.js');

var img1 = Qid('img1');
var img2 = Qid('img2');
var img3 = Qid('img3');
var img4 = Qid('img4');

addEvent(window , 'scroll' , function() {
	var persentage = scroller.getY() / scroller.getMaxY();
	img1.style.top = (-10 - 4 * persentage).toString() + '%';
	img3.style.top = (-10 - 8 * persentage).toString() + '%';
	img2.style.bottom = (-14 + 4 * persentage).toString() + '%';
	img4.style.bottom = (-14 + 8 * persentage).toString() + '%';
});
