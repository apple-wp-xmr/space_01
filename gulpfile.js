const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass')); // This is different from the video since gulp-sass no longer includes a default compiler. Install sass as a dev dependency `npm i -D sass` and change this line from the video.
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');

const browserSync = require('browser-sync').create();

const sourcemaps = require('gulp-sourcemaps');

// compile, prefix, and min scss
function compilescss() {
  return src('css/*.scss')
    .pipe(sourcemaps.init()) // change to your source directory
    .pipe(sass())
    .pipe(prefix('last 2 versions'))
    .pipe(minify())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('css'))
    .pipe(browserSync.stream());
  // .pipe(browserSync.stream()); // change to your final/public directory
}

// browserSync Tasks
function browserSyncServe(cb) {
  browserSync.init({
    server: {
      baseDir: './',
    },
    notify: false,
  });
  cb();
}

function browserSyncReload(cb) {
  browserSync.reload();
  cb();
}

//watchtask
function watchTask() {
  watch('css/*.scss', series(compilescss)); // change to your source directory

  watch('index.html', series(browserSyncReload));
}

// Default Gulp task
exports.default = series(compilescss, browserSyncServe, watchTask);
