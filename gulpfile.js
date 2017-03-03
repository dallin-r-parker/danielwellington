const gulp = require('gulp')
const concat = require('gulp-concat')
const babel = require('gulp-babel')
const sass = require('gulp-sass')
const nodemon = require('nodemon');

const basePath = './public/app/'
const resetpath = './public/reset.scss'
// DECLARE FILE PATHS ========================================
const paths = {
  jsSrc: [`${basePath}app.js`, `${basePath}*.js`],
  sassSource: [`${resetpath}`],
  server: './server/server.js'
}
// DEFINE TASKS ========================================
gulp.task('server', () =>{
  nodemon({
    'script': paths.server
  })
})

gulp.task('js-bundle', () =>{
  gulp.src(paths.jsSrc)
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(concat('all.js'))
  .pipe(gulp.dest('./public/dist'))
})

gulp.task('sass-bundle', () => {
  gulp.src(paths.sassSource)
  .pipe(sass())
  .pipe(concat('all.css'))
  .pipe(gulp.dest('./public/dist'))
})

// WATCH TASKS ========================================
gulp.task('watch', () =>{
  gulp.watch(paths.jsSrc, ['js-bundle'])
  gulp.watch(paths.sassSource, ['sass-bundle'])
})

// RUN DEFAULT TASKS ========================================
gulp.task('default', ['watch', 'js-bundle', 'sass-bundle', 'server'])
