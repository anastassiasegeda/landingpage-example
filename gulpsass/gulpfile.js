global.hostname = "localhost";

var gulp = require('gulp'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
minifycss = require('gulp-minify-css'),
rename = require('gulp-rename'),
browserSync = require('browser-sync'),
concat = require('gulp-concat'),
uglify = require('gulp-uglifyjs');

gulp.task('express', function() {
	var express = require('express');
	var app = express();
	app.use(express.static(__dirname + '/app'));
	app.listen('80', hostname);
});


gulp.task('styles', function () {
	gulp.src('sass/*.sass')
	.pipe(sass({
	includePaths: require('node-bourbon').includePaths
	}).on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 15 versions'],
		cascade: false
	}))
	.pipe(minifycss())
	.pipe(gulp.dest('app'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('csslibs', function(){
	gulp.src([
		'app/libs/font-awesome/css/font-awesome.min.css',
		'app/libs/bootstrap/css/bootstrap.min.css',
		'app/libs/animate/animate.css'
		])
	.pipe(concat('libs.min.css'))
	.pipe(minifycss())
	.pipe(gulp.dest('app'))
	.pipe(browserSync.reload({stream: true}));
});

//compile js
gulp.task('scripts', function(){
	return gulp.src([
		'app/libs/jquery/jquery.min.js',
		'app/libs/animate/animate-css.js',
		'app/libs/bootstrap/js/bootstrap.min.js',
		'app/libs/waypoints/waypoints.min.js'

		])
		.pipe(concat('libs.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('app/js'));
});

gulp.task('browser-sync',function(){
	browserSync({
		//server
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('watch',['browser-sync','styles', 'scripts', 'csslibs'], function() {
	gulp.watch('sass/*.sass', ['styles']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('default', ['styles', 'express', 'watch'], function() {

});
