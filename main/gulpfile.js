'use strict';

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-scss');
var precss = require('precss');
var syntax = require('postcss-scss');
var autoprefixer  = require('autoprefixer');
var short = require('postcss-short');
var stylelint = require("stylelint");
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch'); 
var config = require('./stylelint.config');
var browserSync = require('browser-sync').create();
var stripCssComments = require('gulp-strip-css-comments');
var concat = require('gulp-concat');

var env = process.env.NODE_ENV;

var processors = [
    precss(),
    short(),
    autoprefixer(),
    // stylelint(config),
];

var paths = {
}

gulp.task('js', function(){
    return gulp.src(['./src/js/main.js', './src/js/!(main)*.js'])
    .pipe( sourcemaps.init())
    .pipe(concat('script.js'))
    .pipe( sourcemaps.write('.'))
    .pipe( gulp.dest('./dest/js'))
    .pipe(browserSync.stream());
})





gulp.task('css', function () {
    
    return gulp.src('src/postcss/style.css')
    .pipe( sourcemaps.init())
    .pipe( postcss(processors))
    .pipe( sourcemaps.write('.'))
    .pipe(stripCssComments())
    .pipe( gulp.dest('dest/css/'))
    .pipe(browserSync.stream());
});

gulp.task('serve', function() {
  
      browserSync.init({
          server: "./dest"
      });
  
      gulp.watch('src/js/*.js', ['js']);
      gulp.watch('src/postcss/*.css', ['css']);
      //gulp.watch("app/*.html").on('change', browserSync.reload);
  });
gulp.task('default', function() {
   return gulp.watch('src/**/*.css', ['css']);
  });