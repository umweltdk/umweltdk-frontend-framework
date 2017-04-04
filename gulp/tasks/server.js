'use strict';

var browserSync = require('browser-sync');
var gulp = require('gulp');

gulp.task('serve', function(){
	browserSync.init({
		server: {
			baseDir: 'styleguide'
		}
	});
});
