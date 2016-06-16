'use strict';
var path = require('path');
var gulp = require('gulp');

var config = require('../config');

gulp.task('watch', ['browserSync', 'server'], function() {
	gulp.watch(config.paths.scss.all, ['styles']);
	gulp.watch(config.paths.views.all, ['views']);
});
