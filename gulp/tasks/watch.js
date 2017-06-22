const gulp = require('gulp');
const watch = require('gulp');
const browserSync = require('browser-sync');

gulp.task('watch', function() {
    // gulp.watch('./src/**/*.pug', function() {
    //     // return gulp.series('pugRender');
    //     gulp.start('pugRender');
    // });

    // browser-sync
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    });

    // pug
    gulp.watch('./src/**/*.pug', gulp.series('pugRender'));

    // styles
    gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
    gulp.watch('./dist/*.css', gulp.series('bsCSS'));

    // html
    gulp.watch('./dist/*.html', gulp.series('bsReload'));
})