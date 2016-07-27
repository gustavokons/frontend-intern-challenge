var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var changed  = require('gulp-changed');
var cssmin = require('gulp-cssmin');
var jsmin = require('gulp-jsmin');
var sass = require('gulp-sass');

gulp.task('copy', function() {
	gulp.src('./src/index.html')
		.pipe(gulp.dest('./dist'));
	gulp.src('./src/data/urls.json')
		.pipe(gulp.dest('./dist/data'));
	gulp.src('./src/fonts/*')
		.pipe(gulp.dest('./dist/fonts'));
});

gulp.task('img-min', function() {
    gulp.src('./src/images/*')
        .pipe(changed('./dist/images/'))
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('./dist/images/'))
});

gulp.task('css-min', function () {
    gulp.src('./src/css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('js-min', function () {
    gulp.src('./src/js/*.js')
        .pipe(jsmin())
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('sass', function() {
    gulp.src('./src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('default', ['copy','img-min','css-min','js-min','sass']);