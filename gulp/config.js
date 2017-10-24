'use strict';

var path = require('./paths.js'),
	pngquant = require('imagemin-pngquant'),
	gutil = require('gulp-util');

module.exports = {
	serve: {
		dev: {
			server: {
				baseDir: path.build.dev
			},
			browser: 'google chrome'
		},
		dist: {
			server: {
				baseDir: path.build.dist
			},
			browser: 'google chrome'
		}
	},

	sass: {
		options: {
			outputStyle: 'expanded',
			includePaths: ['node_modules/bootstrap/scss']
		}
	},

	images: {
		 imageminOptions: {
            optimizationLevel: 7,
            progressive: true,
            interlaced: true
        }
	},

	autoprefixer: {
	    browsers: ['last 4 versions']
	},

	css: {
		// srtip css comments options
        stripCommentsOptions: {
            preserve: true
        },

        // cssbeautify options
        cssbeautifyOptions: {
            indent: '  '
        },

        // rename options
        renameOptions: {
            suffix: '.min'
        }
	},

	changed : {
		nunjucks : {
			extension : '.html'
		}
	},


    // error handler
    error: function(error) {
        // output an error message
        gutil.log(
            gutil.colors.red(
                '\n\------------------------------\n\Error in plugin (' + gutil.colors.green(error.plugin) + '):\n\ ' + gutil.colors.blue(error.message) + '------------------------------'
            )
        );
        // emit the end event, to properly end the task
        this.emit('end');
    }
}