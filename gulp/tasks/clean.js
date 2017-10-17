'use strict';

var gulp = require('gulp');
var del = require('del');

var config = require('../config');

gulp.task('clean', function() {
	return del([config.paths.dest]).then(function(paths) {
		console.log('Cleaning..');
	});
});