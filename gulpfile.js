'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');

var src = 'app';
var dest = 'build';

gulp.task('server', function() {
    connect.server({
        livereload: true,
        root: [dest]
    });
});

gulp.task('copy-index', function() {
    gulp.src(src + '/index.html')
    .pipe(gulp.dest(dest));
});

gulp.task('default', ['server']);
