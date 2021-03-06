var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var server = require('gulp-server-livereload');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var uglify = require('gulp-uglify');
var spritesmith = require('gulp.spritesmith')

gulp.task('js', function () {
  'use strict';
  gulp.src(['src/js/jquery.js', 'src/js/ion.rangeSlider.js','src/js/select.js','src/js/mlpushmenu.js', 'src/js/script.js'])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('sass', function() {
    return sass('src/sass/main.scss', { sourcemap: true, style: 'compact' })
        .on('error', sass.logError)
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
        .pipe(rename('app.css'))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('images', function() {
    return gulp.src('src/img/*.*')
        .pipe(cache(imagemin()))
        .pipe(gulp.dest('dist/img'))
});

gulp.task('sprite', function() {
    var spriteData = 
        gulp.src('./src/img/icons/*.*') 
            .pipe(spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.css',
            }));

    spriteData.img.pipe(gulp.dest('./dist/img/')); // путь, куда сохраняем картинку
    spriteData.css.pipe(gulp.dest('./src/sass/')); // путь, куда сохраняем стили
});

gulp.task('pages', function() {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
});

gulp.task('fonts', function(){
    return gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
});

gulp.task('webserver', function() {
    gulp.src('dist')
        .pipe(server({
            livereload: {
                enable: true,
                filter: function(filePath, cb) {
                    cb(!(/.DS_Store/.test(filePath)));
                }
            },
            directoryListing: false,
            open: true,
            log: 'info',
            defaultFile: 'index.html'
        }));
});

gulp.task('default', function() {
    gulp.start('pages', 'sass', 'fonts', 'images','sprite', 'js', 'webserver');
    gulp.watch('src/*.html', ['pages']);
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/js/**/*.*', ['js']);
    gulp.watch('src/img/*.*', ['images']);
    gulp.watch('src/img/icons/*.*', ['sprite']);
});
