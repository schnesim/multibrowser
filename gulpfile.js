const gulp = require('gulp');
const ts = require('gulp-typescript');
const concat = require('gulp-concat');
const runSequnce = require('run-sequence');
const atomElectron = require('gulp-atom-electron');
const symdest = require('gulp-symdest');
const electronConnect = require('electron-connect').server.create({ stopOnClose: true });
const electron = require('gulp-atom-electron');

const tsProject = ts.createProject('tsconfig.json');

/**
 * "build"
 * ==========
 * 1. Copy static content in place
 * 2. transpile ts files
 * 
 * "run"
 * ==========
 * 1. Run "build"
 * 2. Run electron start task
 * 
 * "watch (and "run")"
 * ==========
 * 1. Run "build"
 * 2. Run electron start task
 * 3. Run watch task
 */

gulp.task('build', ['copy', 'css', 'transpile']);

gulp.task('serve', () => {
  process.env.NODE_ENV = 'development';
  runSequnce('build', 'electron-start', 'watch');
});

gulp.task('set-env-development', () => {
  return process.env.NODE_ENV = 'development';
})

gulp.task('css', () => {
  gulp.src('./src/**/*.css').pipe(concat('style.css')).pipe(gulp.dest('dist'));
})

gulp.task('watch', () => {
  gulp.watch(['./src/*.html'/*, './src/*.css'*/], () => {
    runSequnce('copy', 'electron-reload');
  });
  // Changes to the file creating the electron window require a full restart
  gulp.watch(['src/main.ts'], () => {
    runSequnce('transpile', 'electron-restart');
  });
  // watches all .ts files except for main.ts
  gulp.watch(['src/**/!(main).ts'], () => {
    runSequnce('transpile', 'electron-reload');
  });
  gulp.watch(['src/**/*.css'], () => {
    runSequnce('css', 'electron-reload');
  });
})

gulp.task('copy', () => {
  gulp.src(['./src/**/*', '!./src/**/*.ts', '!./src/**/*.css']).pipe(gulp.dest('dist'));
})

// Starts electron, callback is needed so we can shutdown gulp when we're done
gulp.task('electron-start', () => {
  electronConnect.start(callback);
});
gulp.task('electron-reload', electronConnect.reload);
gulp.task('electron-restart', electronConnect.restart);

gulp.task('transpile', () => {
  var tsResult = gulp.src('src/**/*.ts')
    .pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('dist'));
})

const callback = function (electronProcState) {
  console.log('electron process state: ' + electronProcState);
  if (electronProcState == 'stopped') {
    process.exit();
  }
};

gulp.task('electron:build:osx', function () {
  gulp.src(['dist/**/*'])
    .pipe(electron({
      version: '1.7.5',
      platform: 'darwin'
    }))
    .pipe(symdest('packages/osx'));
});

gulp.task('package', function (done) {
  return runSeq('build', 'electron:build:osx', done);
});