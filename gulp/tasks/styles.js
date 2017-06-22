const gulp = require('gulp');
const notify = require('gulp-notify');
const sass = require('gulp-sass');
const sassModuleImporter = require('sass-module-importer');

gulp.task('sass', function() {
    return gulp.src('./src/sass/styles.scss')
        .pipe(sass({ importer: sassModuleImporter() }))
        .on('error', notify.onError({title: 'styles'}))
        .pipe(gulp.dest('./dist/'));
});