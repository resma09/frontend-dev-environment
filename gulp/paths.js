'use strict';

// Base paths
var app	 	=	 './app/',
	dist 	= 	 './dist/',
	dev 	=	 app;


// Main paths
module.exports = {
	build : {
		dist : dist,
		dev : app
	},

	sass : {
		src : [
			dev + 'scss/**/*.sass'
		],

		build : {
			dev: dev + 'css',
			dist: dist + 'css'
		}
	},

	images : {
		src : app + 'img/*',

		build : {
			dev: dev + 'img',
			dist: dist + 'img'
		}
	},

	js : {
			src : app + 'js/*',

			build : {
				dev: dev + 'js',
				dist: dist + 'js'
			}
		},

	fonts : {
		src : app + 'fonts/**/*',

		build : {
			dev: dev + 'fonts',
			dist: dist + 'fonts'
		}
	},

	nunjucks : {
		src : app + 'html/templates/*.{html,nunjucks}',
		templates: app + 'html/templates',
		pages : app + 'html/pages/*.{html,nunjucks}',

		watch : {
			pages : app + 'html/pages/*.{html,nunjucks}',
			templates :  app + 'html/templates/*.{html,nunjucks}'
		},
		
		build : {
			dev : dev,
			dist: dist
		}
	},

	html : {
		src : app + '*.html'
	}
}