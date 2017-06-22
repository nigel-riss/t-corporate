const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('bsCSS', function() {
    browserSync.stream();
});

gulp.task('bsReload', function() {
    browserSync.reload();
});