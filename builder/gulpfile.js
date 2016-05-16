var gulp = require('gulp'),
	jade = require('jade'),// jade begin
	gulpJade = require('gulp-jade'),
	katex = require('katex'),// jade end
	stylus = require('gulp-stylus'),
  nib = require('nib'),
	postcss = require('gulp-postcss'),//postcss begin
	cssnext = require('cssnext'),
	rucksack = require('rucksack-css'),
	lost = require('lost'); //postcss end
//stylus
gulp.task('styles',function () {
    var processors = [
        cssnext({}),
        rucksack,
        lost,
    ];
    return gulp.src('../src/css/style.styl')
        //.pipe(stylus({use:[nib()]}))
        .pipe(stylus())
        .pipe(postcss(processors))
        .pipe(gulp.dest('../src/css/'));
});
gulp.task('watch:styles', function () {
    gulp.watch('../src/**/*.styl', ['styles']);
});
//Jade
jade.filters.katex = katex.renderToString;
jade.filters.shoutFilter = function (str) {
  return str + '!!!!';
}
gulp.task('jade', function () {
  return gulp.src('../src/index.jade')
    .pipe(gulpJade({
      jade: jade,
      pretty: true
    }))
    .pipe(gulp.dest('../src/'))
});
gulp.task('watch:jade', function () {
	gulp.watch('../**/*.jade', ['jade']);
});
//js
var uglify = require('gulp-uglify');
gulp.task('js', function() {
  return gulp.src('../src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('../build/js'));
});
gulp.task('watch:js', function () {
	gulp.watch('../**/*.js', ['js']);
});
//build
gulp.task('watch:build', function () {
	gulp.watch('../src/**/*.jade', ['jade']);
	gulp.watch('../src/**/*.styl', ['styles']);
	gulp.watch('../src/**/*.js', ['js']);
  gulp.watch('bower.json', ['bower']);
});
//img optim
var imagemin = require('gulp-imagemin');
// Compress Task
gulp.task('compress', function() {
  gulp.src('../src/img/**')
  .pipe(imagemin())
  .pipe(gulp.dest('../build/img'))
});
//bower
var wiredep = require('gulp-wiredep');
gulp.task('bower', function () {
  gulp.src('../src/index.html')
    .pipe(wiredep({
      directory: '../src/bower_components'
    }))
    .pipe(gulp.dest('../src'));
});
gulp.task('watch:bower', function () {
  gulp.watch('bower.json', ['bower']);
});

var useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    cleanCss = require('gulp-clean-css');
 
gulp.task('html', function () {
    return gulp.src('../src/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', cleanCss()))
        .pipe(gulp.dest('../build'));
});