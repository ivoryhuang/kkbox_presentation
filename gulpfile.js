'use strict';

const gulp = require('gulp');
const aglio = require('gulp-aglio');

gulp.task('docs', () => {
	gulp.src('src/*.apib')
	    .pipe(aglio({
	    	template: 'default',
	    	themeFullWidth: true,
	    }))
    .pipe(gulp.dest('./'));
});