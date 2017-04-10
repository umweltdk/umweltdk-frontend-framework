'use strict';
var config = require('../config');
var gulp = require('gulp');

gulp.task('watch', ['serve'], function() {
	gulp.watch(config.paths.all, ['styleguide']);
	gulp.watch(config.styleguide.entry, ['styleguide']);
});
