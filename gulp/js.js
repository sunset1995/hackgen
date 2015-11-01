
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var jsPath = require('./_config.js').js;
var errorLog = require('./_errorLog.js').errorLog;

gulp.task('js' , function(){
	var bundler = browserify( jsPath.src );
	bundler.bundle()
		.on('error',errorLog)
		.pipe(source('hackgen.js'))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(gulp.dest( jsPath.dst ));
});