
/*
*	This module doesn't export anything.
*	This is a library define global function.
*	I use module just want to guarantee that
*	these function appear before codes need these.
*/


Q = function( queryStr ){
	return document.querySelector( queryStr );
}
Qall = function( queryStr , func ){
	var tmp = document.querySelectorAll( queryStr );
	for(var i=0 ; i<tmp.length ; ++i)
		func( tmp[i] , i );
	tmp = null;
}
addEvent = function( ele , eve , func ){
	if( ele.addEventListener ) ele.addEventListener(eve , func);
	else if( ele.attachEvent ) ele.attachEvent('on'+eve , func);
	else ele[eve] = func;
}
removeEvent = function( ele , eve , func ){
	if( ele.removeEventListener ) ele.removeEventListener(eve , func);
	else if( ele.detachEvent ) ele.detachEvent('on'+eve , func);
	else ele[eve] = null;
}
GET = function( url , callback ){
	var xhttp;
	if( XMLHttpRequest ) xhttp = new XMLHttpRequest();
	else xhttp = new ActiveXObject("Msxml2.XMLHTTP");
	xhttp.open("GET" , url , true);
	xhttp.onreadystatechange = function(){
		if( xhttp.readyState == 4 && typeof callback === 'function' )
			callback( xhttp.responseText );
	}
	xhttp.send();
}