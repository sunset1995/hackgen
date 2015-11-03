
module.exports = {
	image: {
		src: './image/**/*',
		dst: './build/image/',
		watch: './image/**/*'
	},
	sass: {
		src: './scss/hackgen.scss',
		dst: './build/',
		watch: './scss/**/*'
	},
	js: {
		src: './js/main.js',
		dst: './build',
		watch: './js/**/**'
	},
	html: {
		src: './index.html',
		dst: './build',
		watch: ['./index.html','./pages/*']
	}
};
