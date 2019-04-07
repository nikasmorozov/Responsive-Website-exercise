var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('sync', function() {
 browserSync.init({
 proxy: "business.dev",
 files: "*.html,*.css,*.php,css/*css"
});
});