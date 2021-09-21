const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

function style(){
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/assets/css'))
        .pipe(browserSync.stream());
}

function watch(){
    browserSync.init({
        port: 8000,
        server: {
            baseDir: './src'
        }
    });
    gulp.watch('./src/scss/**/*.scss', style);
    gulp.watch('./src/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
exports.default = gulp.series(style, watch);