'use strict';

/*global global*/

var gulp = require('gulp');
var config = require('../config');

// Views task
gulp.task('views', function() {
	return gulp.src(config.paths.views.entry)
		.pipe(gulp.dest(config.paths.build));
});
