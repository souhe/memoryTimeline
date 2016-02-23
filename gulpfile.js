var gulp = require('gulp');
var concat = require('gulp-concat');
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');
var connect = require('gulp-connect');
var gls = require('gulp-live-server');
var notifier = require('node-notifier');

function build(){
    return gulp.src('src/main.js')
        .pipe(webpack(webpackConfig))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist'));
}

gulp.task('serve', function() {

    var server = gls.new('./src/server.babel.js');    
    server.start();
    
    gulp.watch(['src/**/*.js', 'src/**/*.less'], ['build', function (file) {
        server.start.bind(server)();
        notifier.notify({
            title: 'built',
            message: 'server reloaded'
        });
    }]); 
});

gulp.task('build', function(){
    return build();
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