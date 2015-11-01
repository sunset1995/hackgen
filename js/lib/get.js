
var crossBrowserAjax = [
	function(){return new XMLHttpRequest()},
	function(){return new ActiveXObject("Msxml2.XMLHTTP")},
	function(){return new ActiveXObject("Msxml3.XMLHTTP")},
	function(){return new ActiveXObject("Microsoft.XMLHTTP")}
];
var xmlhttp;
for(var i=0 ; i<crossBrowserAjax.length ; ++i){
	try{
		xmlhttp = crossBrowserAjax[i];
		var tmp = xmlhttp();
		tmp = null;
	}
	catch(e){ continue; }
	break;
}

module.exports = function(url , callback){
	var req = xmlhttp();
	req.open("GET" , url , true);
	req.onreadystatechange = function(){
		if( req.readyState == 4 )
			callback( req.response );
	};
	req.send();
} 