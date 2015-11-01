
module.exports = {
	image: {
		src: './image/**/*',
		dst: './build/image/',
		watch: './image/**/*'
	},
	sass: {
		src: './scss/main.scss',
		dst: './build/',
		watch: './scss/**/*'
	},
	js: {
		src: './js/main.js',
		dst: './build',
		watch: './js/**/**'
	}
};