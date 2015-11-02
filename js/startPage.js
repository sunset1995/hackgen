// include library
require('./lib/dom.js');

if( !window.location.hash || window.location.hash == "" ){
	var startingPage = function(){
		Q('#navbar').className += ' open';
		Q('#content').className += ' open';
		setTimeout(function(){
			Qall( '.nav' , function( ele ){
				ele.className += ' open';
			});
		} , 800);
		Qall( '.nav' , function( ele ){
			removeEvent(ele , 'click' , startingPage);
		});
	};

	Qall( '.nav' , function( ele ){
		addEvent(ele , 'click' , startingPage);
	});
}
else{
	Q('#navbar').className += ' open';
	Q('#content').className += ' open';
	setTimeout(function(){
		Qall( '.nav' , function( ele ){
			ele.className += ' open';
		});
	} , 800);
}