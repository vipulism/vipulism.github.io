'use strict';

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-scss');
var precss = require('precss');
var syntax = require('postcss-scss');
var autoprefixer  = require('autoprefixer');
var short = require('postcss-short');
var sourcemaps = require('gulp-sourcemaps');

var processors = [
    short(),
    autoprefixer(),
    precss(),
];

gulp.task('css', function () {
  
  return gulp.src('src/postcss/*.css')
     .pipe( sourcemaps.init())
     .pipe( postcss(processors))
     .pipe( sourcemaps.write('.'))
     .pipe( gulp.dest('css/'));
});

gulp.task('default', function() {
    // place code for your default task here
  });