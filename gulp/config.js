'use strict';
var pkg = require('../package.json');

module.exports = {
	serverport: 1337,
	paths: {
		build: 'build',
		css: {
			entry: 'temp/css/*.css',
			dest: 'build/css'
		},
		scss: {
			entry: {
				dev : 'src/scss/app.scss',
				prod : 'src/scss/framework.scss',
			},
			all: 'src/scss/**/*.scss',
			dest: 'temp/css/'
		},
		views: {
			entry: 'src/index.html',
			all: 'src/**/*.html',
			dest: 'build'
		}
	}
};
