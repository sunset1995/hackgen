
// include library
require('./lib/dom.js');

var startingPage = function(){
	Q('#navbar').className += ' open';
	Q('#content').className += ' open';
	Qall( '.nav' , function( ele ){
		removeEvent(ele , 'click' , startingPage);
	});
	setTimeout(function(){
		Qall( '.nav' , function( ele ){
			ele.className += ' open';
		});
	} , 800);
};

Qall( '.nav' , function( ele ){
	addEvent(ele , 'click' , startingPage);
});

var pages = [
	"about",
	"rules",
	
];