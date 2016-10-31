"use strict";

var gulp = require('gulp');

gulp.task('default', function() {
	//console.log('=============== gulp start ===============');
	//console.log(__dirname);
gulp.start('print');
});

gulp.task('print', function() {
	console.log('============== print fn ===============');
});
