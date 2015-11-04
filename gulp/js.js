
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var browserify = require('gulp-browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var concat = require('gulp-concat');

var jsPath = require('./_config.js').js;
var errorLog = require('./_errorLog.js').errorLog;

gulp.task('js' , function(){
	gulp.src(jsPath.src)
		.pipe(browserify())
		.pipe(concat('hackgen.js'))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(gulp.dest(jsPath.dst));
});
