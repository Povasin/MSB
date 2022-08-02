// TODO: починить gulpFile чтобы разобраться почему header.scss жрет 5 секунд LCP 
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');

gulp.task('sass-compile', ()=>{
    return gulp('**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest('./css/'))
})

gulp.task('watch', ()=>{
    gulp.watch('**/*.scss', gulp.series('sass-compile'))
})