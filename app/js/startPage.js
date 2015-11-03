require('./lib/dom.js');

if( window.location.hash == "" )
	window.location.hash = "#target_about";

Q('#navbar').className += ' open';
Q('#content').className += ' open';
setTimeout(function() {
	Qall( '.nav' , function( ele ) {
		ele.className += ' open';
	});
} , 800);
