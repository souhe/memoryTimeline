var gulp = require('gulp');
var concat = require('gulp-concat');
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');
var connect = require('gulp-connect');

gulp.task('build', function(){
    return gulp.src('src/main.js')
        .pipe(webpack(webpackConfig))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('copy', function() {
    gulp.src('src/index.html')
      .pipe(gulp.dest('dist'));
      
    gulp.src('src/data/timeline.json')
      .pipe(gulp.dest('dist/data'));
});

gulp.task('default', ['build', 'copy']);

gulp.task('watch', function(){
    connect.server({
        root: 'dist',
        livereload: true,
        port: 8004
    });
    
    gulp.watch(['src/**/*.js', 'src/**/*.less'], ['build']); 
    gulp.watch(['src/index.html'], ['copy']); 
})