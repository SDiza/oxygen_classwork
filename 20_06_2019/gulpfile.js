var gulp = require('gulp');
var uglify = require('gulp-uglify');
var scss = require('gulp-sass');


var src = {
    scss: 'src/scss/*scss',
    js: ['src/js/*.js'],
};

gulp.task('minify_js', function () {
    return gulp.src(src.js) //будет брать все файоы js
    .pipe(uglify()) .pipe(gulp.dest('dist'))
});

gulp.task('scss', function () {
    return gulp.src('src/scss/*scss')
        .pipe(scss()) .pipe(gulp.dest('dist'))

})

gulp.task('watch', function () {
    gulp.watch(src.scss, gulp.series('scss'));
    gulp.watch(src.js, gulp.series('minify_js'));

})