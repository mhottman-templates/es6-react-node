'use strict';
var gulp = require('gulp');
var path = require('path');

var compass = require('gulp-compass'),
    gutil = require('gulp-util');


const CSS_SOURCE_DIR = path.resolve(__dirname, './client/styles/**/*.scss');
const CSS_BUILD_DIR = path.resolve(__dirname, './client/public/css');

gulp.task('watch', ['scripts'], function() {
    gulp.watch([CSS_SOURCE_DIR], ['scripts']);
});

gulp.task('scripts', function() {
    return gulp.src(CSS_SOURCE_DIR)
        .pipe(compass({
            sass     : './client/styles',
            css      : CSS_BUILD_DIR,
            logging  : true,
            comments : true
        }))
        .on('error', function(err) {
            gutil.log("Gulp Error in 'Development Task'", err.toString());
            this.emit('end'); //resumes watch after error
        })
        .pipe(gulp.dest(CSS_BUILD_DIR))
});
