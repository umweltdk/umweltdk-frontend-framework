'use strict';

var config = require('../config');
var browserSync = require('browser-sync');
var gulp = require('gulp');
var inlinesource = require('gulp-inline-source');
var gulpif = require('gulp-if');


// Views task
gulp.task('styleguide', function() {
	return gulp.src(config.styleguide.entry)
		.pipe(inlinesource())
		.pipe(gulp.dest(config.styleguide.dest))
		.pipe(gulpif(browserSync.active, browserSync.reload({
			stream: true
		})));
});
