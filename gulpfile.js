const gulp = require('gulp');
const terser = require('gulp-terser');
const lightningcss = require('gulp-lightningcss');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

function minifyESM() {
  return gulp.src('src/js/bell.esm.js')
  	.pipe(sourcemaps.init())
    .pipe(terser({
      module: true,
      mangle: true
    }))
    .pipe(rename({
      basename: 'bell.esm.min',
      extname: '.js'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
}
function notMinifyESM() {
  return gulp.src('src/js/bell.esm.js')
    .pipe(rename({
      basename: 'bell.esm',
      extname: '.js'
    }))
    .pipe(gulp.dest('dist'));
}
function minify() {
  return gulp.src('src/js/bell.js')
  	.pipe(sourcemaps.init())
    .pipe(terser({
      module: false,
      mangle: true
    }))
    .pipe(rename({
      basename: 'bell.min',
      extname: '.js'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
}
function notMinify() {
  return gulp.src('src/js/bell.js')
    .pipe(rename({
      basename: 'bell',
      extname: '.js'
    }))
    .pipe(gulp.dest('dist'));
}

function minifyCSS() {
  return gulp.src('src/css/bell.css')
  	.pipe(sourcemaps.init())
    .pipe(lightningcss({
            autoprefixer: false,
            minify: true
        }))
    .pipe(cssnano())
    .pipe(rename({
		  basename: 'bell.min',
		  extname: '.css'
		}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
}

function notMinifyCSS(){
	return gulp.src('src/css/bell.css')
		.pipe(rename({
		  basename: 'bell',
		  extname: '.css'
		}))
    .pipe(gulp.dest('dist'));
}
function minifyThemes(){
	return gulp.src('src/themes/**/*.css')
		.pipe(lightningcss({
            autoprefixer: false,
            minify: true
        }))
    	.pipe(cssnano())
    	.pipe(gulp.dest('dist/themes'))
}

exports.default = gulp.series(minifyCSS,notMinifyCSS, minifyThemes, minify, notMinify,minifyESM,notMinifyESM);
