'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");

sass.compiler = require('node-sass');

gulp.task('compileCSS', function () {
    return gulp.src('src/css/src/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css/dst'))
        .pipe(cleanCSS())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('css/dst'))
});

gulp.task('watch', function() {
    gulp.watch('src/css/src/**/*.scss', ['compileCSS']);
});








