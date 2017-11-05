'use strict';

const gulp = require('gulp');
const aglio = require('gulp-aglio');

gulp.task('docs', () => {
  gulp.src('src/index.apib')
    .pipe(aglio({template: 'default'}))
    .pipe(gulp.dest('./'));
});