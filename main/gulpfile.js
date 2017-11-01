'use strict';

var gulp = require('gulp');
var postcss    = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');




gulp.task('css', function () {
  
  return gulp.src('src/postcss/*.css')
      .pipe( sourcemaps.init() )
     .pipe( postcss(/*[ require('precss'), require('autoprefixer') ]*/) )
      .pipe( sourcemaps.write('.') )
      .pipe( gulp.dest('css/') );
});

gulp.task('default', function() {
    // place code for your default task here
  });