/*
*	Author : Sunset
*	Description : program to build source code
*/

var fs = require('fs');

fs.readdirSync('./gulp')
	.forEach(function( task ){
		if( task[0] != '_' )
			require('./gulp/' + task );
	});