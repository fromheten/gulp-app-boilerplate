'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');

var src = 'app';
var dest = 'build';

gulp.task('watch', function() {
    gulp.watch(src + '/**/*', ['build']);
});

gulp.task('server', ['build'], function() {
    connect.server({
        livereload: true,
        root: [dest]
    });
});

gulp.task('clean', function() {
    gulp.src(dest + '/**/*')
    .pipe(clean());
});

gulp.task('build', ['clean'], function() {
    gulp.src(src + '/index.html')
    .pipe(gulp.dest(dest));

    gulp.src(src + '/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest(dest));
});

gulp.task('default', ['server']);
