'use strict';

var browserSync = require('browser-sync');
var config = require('../config');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var styleGuide = require('postcss-style-guide');
var cssnano = require('gulp-cssnano');

gulp.task('styles', function() {
	return gulp.src(config.paths.entry)
		.pipe(sass({
			includePaths: [
				'node_modules/'
			],
		})).on('error', sass.logError)
		.pipe(gulpif(!global.isProd, postcss([
			styleGuide({
				themePath: 'styleguide-theme',
				dest: 'styleguide/index.html'
			})
		]), cssnano()))
		.pipe(gulp.dest(config.paths.dest))
		.pipe(gulpif(browserSync.active, browserSync.reload({
			stream: true,
			once: true
		})));
});
