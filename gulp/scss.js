
var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');


var sassPath = require('./_config.js').sass;
var errorLog = require('./_errorLog.js').errorLog;

gulp.task('scss' , function(){
	return gulp.src( sassPath.src )
		.pipe(sass())
		.on('error' , errorLog )
		.pipe(concat('hackgen.css'))
		.pipe(autoprefixer(['last 10 version']))
		.pipe(cssmin())
		.pipe(gulp.dest( sassPath.dst ));
});