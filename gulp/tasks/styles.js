'use strict';
var gulp = require('gulp');
var config = require('../config');
var sass = require('gulp-sass')

gulp.task('build', ['clean'], function() {
	return gulp.src(config.paths.entry)
		.pipe(sass({
			includePaths: [
				'node_modules/',
				'bower_components/'
			],
		})).on('error', sass.logError)
		.pipe(gulp.dest(config.paths.dest));
});

