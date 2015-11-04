
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');


var config = require('./_config.js');
var sassPath = config.sass;
var errorLog = require('./_errorLog.js').errorLog;

function compile_scss(output_style) {
    output_style = output_style || 'compressed';
	return gulp.src( sassPath.src )
		.pipe(sass({
			outputStyle: output_style
		}))
		.on('error' , errorLog )
		.pipe(autoprefixer(['last 10 version']))
		.pipe(gulp.dest( sassPath.dst ));
}

gulp.task('scss' , compile_scss);
gulp.task('scss-debug', function () {
    return compile_scss('nested');
})
