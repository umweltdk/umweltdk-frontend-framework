'use strict';

var browserSync = require('browser-sync');
var config = require('../config');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var postcss = require('gulp-postcss')
var sass = require('gulp-sass');
var styleGuide = require('postcss-style-guide');

gulp.task('scss', function() {
	return gulp.src(config.paths.entry)
		.pipe(sass({
			includePaths: [
				'node_modules/',
				'bower_components/'
			],
		})).on('error', sass.logError)
		.pipe(postcss([
			styleGuide({
				themePath: 'node_modules/psg-theme-minimal',
				project: 'Hive Frontend',
				dest: 'dist/index.html',
				showCode: true,
			})
		]))
		.pipe(gulpif(browserSync.active, browserSync.reload({
			stream: true
		})));
});

gulp.task('serve', ['scss'], function(){
	browserSync.init({
		server: {
			baseDir: config.paths.dest
		}
	});
});

gulp.task('build', ['serve'], function() {
	// Start watching changes and update styleguide whenever changes are detected
	// Styleguide automatically detects existing server instance
	gulp.watch([config.paths.all], ['scss']);
});
