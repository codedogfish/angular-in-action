var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('default',function(){
	browserSync({
		server:{
			baseDir:'./src',
			routes:{
				'/bower_components':'bower_components'
			}
		},
		port: 3600
	});
});