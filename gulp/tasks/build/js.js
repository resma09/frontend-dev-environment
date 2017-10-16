'use strict';

// Copy js to distribution folder.
// 
// Tasks
// 'gulp dist:js' : main js task
module.exports = function(gulp, $, path, config) {
	gulp.task( 'dist:js', function(){
		return gulp.src(path.js.src)
			.pipe($.plumber({
				errorHandler : config.error
			}))
			
			.pipe(gulp.dest(path.js.build.dist));
	});
}