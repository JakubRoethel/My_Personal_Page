// list dependences 

const gulp = require('gulp');

const sass = require('gulp-sass');

const sourcemaps = require('gulp-sourcemaps');

const autoprefixer = require('gulp-autoprefixer');

const minify = require('gulp-clean-css');

const terser = require('gulp-terser');

const imagemin = require('gulp-imagemin');

const imageWebp = require('gulp-webp');

const browserSync = require('browser-sync').create();

const deploy = require('gulp-gh-pages');

sass.compiler = require('sass');

// functions

// server
function server (cb) {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    cb ();
}

// scss 
function css () {
    return gulp.src('./src/scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({}))
    .pipe(minify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());

}

//js
function jsMin(){
    return gulp.src('./src/js/*.js')
      .pipe(terser({}))
      .pipe(gulp.dest('./dist/js'))
  }

  //img
function optimizeImg(){
  return gulp.src('./src/img/*.{jpg,png}')
    .pipe(imagemin([
      imagemin.mozjpeg({ quality:80, progressive:true }),
      imagemin.optipng({optimizationLevel: 2}),
    ]))
    .pipe(gulp.dest('dist/img'))
}

// webp img
// webp img
function webpImg () {
    return src('./src/img/*.{jpg,png}')
      .pipe(imageWebp({}))
      .pipe(gulp.dest('./dist/img'))
  }

function watch (cb) {
    gulp.watch ("./src/scss/**/*.scss", gulp.series (css))
    gulp.watch('./src/js/*.js', gulp.series (jsMin) );
    gulp.watch('./src/img/*.{jpg,png}', gulp.series (optimizeImg) );
    gulp.watch('./dist/img/*.{jpg,png}', gulp.series  (webpImg) );
    gulp.watch("./*.html").on('change', browserSync.reload)
    cb ();
}
/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy())
});

module.exports.css = css;
module.exports.watch = watch;

module.exports.default =  gulp.series (server,css, watch);



