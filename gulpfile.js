'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');

var dest = 'build';

gulp.task('server', function() {
    connect.server({
        livereload: true,
        root: [dest]
    });
});

gulp.task('default', ['server']);
