
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');


var sassPath = require('./_config.js').sass;
var errorLog = require('./_errorLog.js').errorLog;

gulp.task('scss' , function(){
	return gulp.src( sassPath.src )
		.pipe(sass({
			outputStyle: 'compressed'
		}))
		.on('error' , errorLog )
		.pipe(autoprefixer(['last 10 version']))
		.pipe(gulp.dest( sassPath.dst ));
});
