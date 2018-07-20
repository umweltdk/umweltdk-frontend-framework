var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync').create();
var config = {
	'src': './',
	'dest': 'dist/',
	'minify': true,
	'sourcemaps': false
};


// HTML
gulp.task('html', function() {
	return gulp.src('*.html')
		.pipe(browserSync.stream());
});

// Compile and autoprefix stylesheets
gulp.task('styles', function() {
	return gulp.src(config.src + 'src/**/*.scss')
		.pipe($.if(config.sourcemaps, $.sourcemaps.init()))
		.pipe($.sass({
			includePaths: [
				'node_modules/',
				'node_modules/baseguide/scss/'
			],
			precision: 8,
			outputStyle: 'expanded'
		}).on('error', function(error) {
			$.util.log($.util.colors.red(error.message));
			this.emit('end');
		}))
		.pipe($.postcss([
			autoprefixer()
		]))
		.pipe(gulp.dest(config.dest + 'css'))
		.pipe(browserSync.stream())
		.pipe($.cleanCss({compatibility: 'ie8'}))
		.pipe($.if(config.sourcemaps, $.sourcemaps.write()))
		.pipe($.rename({suffix: '.min'}))
		.pipe($.if(config.minify, gulp.dest(config.dest + 'css')))
		.pipe(browserSync.stream());
});

// Lint stylesheets
gulp.task('stylelint', function() {
	return gulp.src(config.src + 'src/**/*.scss')
		.pipe($.postcss([
			require('stylelint')
		], {
			syntax: require('postcss-scss')
		}));
});


// Optimize images
gulp.task('images', function() {
	return gulp.src(config.src + 'img/**/*.{gif,jpg,png,svg}')
		.pipe($.cache($.imagemin()))
		.pipe(gulp.dest(config.dest + 'img'))
		.pipe(browserSync.stream());
});

// Build production files
gulp.task('build', ['html', 'styles', 'images']);

// Serve compiled files
gulp.task('serve', ['build'], function() {
	browserSync.init({
		server: true,
		notify: false,
		snippetOptions: {
			rule: {
				match: /<\/body>/i
			}
		}
	});
});

// Watch files for changes
gulp.task('watch', function() {
	gulp.watch('*.html', ['html']);
	gulp.watch(config.src + 'src/**/*.scss', ['styles']);
	gulp.watch(config.src + 'img/**/*.{gif,jpg,png,svg}', ['images']);
});

// Run all tasks
gulp.task('default', ['serve', 'watch']);
