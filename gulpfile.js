'use strict';

const gulp = require('gulp');
const aglio = require('gulp-aglio');

gulp.task('docs', () => {
  gulp.src('src/*.md')
    .pipe(aglio({template: 'default'}))
    .pipe(gulp.dest('docs'));
});