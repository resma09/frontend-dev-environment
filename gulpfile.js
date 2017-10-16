'use strict';

var gulp = require('gulp'),
	path = require('./gulp/paths.js'),
	config = require('./gulp/config.js');

var $ = require('gulp-load-plugins')({
        // used for all plugins type not just with gulp-*
        pattern: '*'
   	});

$.loadSubtasks('./gulp/tasks/**/*.js', $, path, config);

gulp.task( 'default',  
	[	
		'nunjucks',
		'nunjucks:template',
		'sass', 
		'browsersync',
		'watch'
	]
);
gulp.task( 'dist', 
	['dist:html',
	'dist:fonts',
	'dist:css',
	'dist:images',
	'dist:js'
	]);