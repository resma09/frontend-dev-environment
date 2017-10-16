'use strict';

module.exports = function(gulp, $, path, config) {

    gulp.task('watch', function() {
        gulp.watch( path.sass.src, ['sass']);
        gulp.watch( path.nunjucks.watch.pages, ['nunjucks']);
        gulp.watch( path.nunjucks.watch.templates, ['nunjucks:template']);
    });
    
};