var gulp = require('gulp');
postcss = require('gulp-postcss');
autoprefixer = require('gulp-autoprefixer');
sourcemaps = require('gulp-sourcemaps');
atImport = require('postcss-import');
cssnext = require('postcss-cssnext');
sorting = require('postcss-sorting');
nested = require('postcss-nested');

gulp.task('css', function() {
    var processors = [
        atImport,
        nested,
        cssnext,
        sorting({
            "sort-order": "csscomb"
        }),
        autoprefixer
    ];
    return gulp.src('./src/css/styles.css')
        .pipe(sourcemaps.init())
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css'));
});

gulp.task('default', function() {
    gulp.watch('./src/css/*.css', ['css']);
});