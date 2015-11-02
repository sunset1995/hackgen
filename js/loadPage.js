// include library
require('./lib/dom.js');
var get = require('./lib/get.js');

var pages = [
	{url: './pages/about' , id: 'about_text' , btnid: 'about'},
	{url: './pages/rules' , id: 'rules_text' , btnid: 'rules'},
	{url: './pages/schedule' , id: 'schedule_text' , btnid: 'schedule'},
	{url: './pages/staff' , id: 'staff_text' , btnid: 'staff'}
];

var nowShow = 'nothing';
var urlhash = window.location.hash.slice(8);
var lock = false;
for(var i=0 ; i<pages.length ; ++i){
	var getPage = function(){
		var container = pages[i].id;
		get(pages[i].url , function(data){
			Qid( container ).innerHTML = data;
		});

		var trigger = pages[i].btnid;
		addEvent(
			document.getElementById( trigger ),
			'click',
			function(){
				if( lock || nowShow === container )
					return;
				lock = true;
				removeClass( Qid( nowShow ) , 'show' );
				setTimeout(function(){
					Qid( container ).style.display = 'block';
					Qid( nowShow ).style.display = 'none';
				} , 300);
				setTimeout(function(){
					addClass( Qid( container ) , 'show' );
					nowShow = container;
					lock = false;
				} , 350);
			}
		);
	}();

	if( pages[i].btnid==urlhash ){
		lock = true;
		setTimeout(function(){
			Qid( urlhash+'_text' ).style.display = 'block';
		} , 300);
		setTimeout(function(){
			addClass( Qid( urlhash+'_text' ) , 'show' );
			nowShow = urlhash+'_text';
			lock = false;
		} , 350);
	}
}
