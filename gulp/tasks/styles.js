'use strict';
var gulp = require('gulp');
var gulpif = require('gulp-if');
var browserSync = require('browser-sync');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var mqpacker = require('css-mqpacker');
var postcsswillchange = require('postcss-will-change');
var postcssEasings = require('postcss-easings');
var nano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var singleCharset = require('postcss-single-charset');
var discardEmpty = require('postcss-discard-empty');
var discardComments = require('postcss-discard-comments');
var rename = require('gulp-rename');

var config = require('../config');

var sass = require('gulp-sass')

var processors = [
	postcsswillchange,
	postcssEasings,
	mqpacker,
	autoprefixer({
		browsers: ['last 2 version']
	}),
	discardComments,
	discardEmpty,
	singleCharset
];

gulp.task('styles', ['sass'], function() {
	return gulp.src(config.paths.css.entry)
		.pipe(postcss(processors))
		.pipe(gulpif(global.isProd, nano()))
		.pipe(rename('app.css'))
		.pipe(gulp.dest(config.paths.css.dest))
		.pipe(gulpif(browserSync.active, browserSync.reload({
			stream: true
		})));
});

gulp.task('sass', function() {
	return gulp.src(gulpif(global.isProd, config.paths.scss.entry.dev, config.paths.scss.entry.prod))
		.pipe(sass({
			includePaths: [
				'node_modules/',
				'bower_components/'
			],
		})).on('error', sass.logError)
		.pipe(gulp.dest(config.paths.scss.dest));
});

