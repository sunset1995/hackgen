
var gulp = require('gulp');
var fileinclude = require('gulp-file-include');

var htmlPath = require('./_config.js').html;
var errorLog = require('./_errorLog.js').errorLog;

gulp.task('html' , function(){
	return gulp.src( htmlPath.src )
		.pipe(fileinclude({
			prefix: '@@'
		}))
		.on('error' , errorLog )
		.pipe(gulp.dest( htmlPath.dst ));
});