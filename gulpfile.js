'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var webserver = require('gulp-webserver');
var plumber = require('gulp-plumber');
var del = require('del');

var src = 'src';
var dest = 'build';

gulp.task('watch', function() {
    gulp.watch(src + '/**/*', ['build']);
});

gulp.task('server', ['clean', 'build'], function() {
    gulp.src(dest)
    .pipe(plumber())
    .pipe(webserver({
        livereload: true,
    }));
});

gulp.task('clean', function() {
    del([dest + '/**']);
});

gulp.task('build', ['clean'], function() {
    gulp.src(src + '/index.html')
    .pipe(plumber())
    .pipe(gulp.dest(dest));

    gulp.src(src + '/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest(dest));
});

gulp.task('default', ['clean','server', 'watch']);
