'use strict';

var browserSync = require('browser-sync');
var config = require('../config');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
	return gulp.src(config.paths.entry)
		.pipe(sass({
			includePaths: [
				'node_modules/'
			],
		})).on('error', sass.logError)
		.pipe(gulpif(!global.isProd, autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		})))
		.pipe(gulp.dest(config.paths.dest))
		.pipe(gulpif(browserSync.active, browserSync.reload({
			stream: true,
			once: true
		})));
});
