var gulp = require('gulp');
var htmlclean = require('gulp-htmlclean');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var inject = require('gulp-inject');

var paths = {
    src: 'src/**/*',
    srcHTML: 'src/**/*.html',
    srcCSS: 'src/**/*.css',
    srcJS: 'src/**/*.js',
    srcImages: 'src/**/*.jpg',
    dist: 'dist',
    distIndex: 'dist/index.html',
    distCSS: 'dist/**/*.css',
    distJS: 'dist/**/*.js',
    distImages: 'dist/**/*.jpg'
};

gulp.task('html:dist', function () {
    return gulp.src(paths.srcHTML)
        .pipe(htmlclean())
        .pipe(gulp.dest(paths.dist));
});
gulp.task('css:dist', function () {
    return gulp.src(paths.srcCSS)
        .pipe(concat('style.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest(paths.dist));
});
gulp.task('js:dist', function () {
    return gulp.src(paths.srcJS)
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.dist));
});

gulp.task('images:dist', function () {
    return gulp.src(paths.srcImages)
        .pipe(gulp.dest(paths.dist));
});

gulp.task('copy:dist', ['html:dist', 'css:dist', 'js:dist', 'images:dist']);
gulp.task('inject:dist', ['copy:dist'], function () {
    var css = gulp.src(paths.distCSS);
    var js = gulp.src(paths.distJS);
    var images = gulp.src(paths.distImages);
    return gulp.src(paths.distIndex)
        .pipe(inject(css, { relative: true }))
        .pipe(inject(js, { relative: true }))
        .pipe(inject(images, { relative: true }))
        .pipe(gulp.dest(paths.dist));
});
gulp.task('build', ['inject:dist']);