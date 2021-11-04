const gulp = require('gulp');
const s3 = require('gulp-s3');
const configs = require('../aws.json');

gulp.task('deploy', () => gulp.src('./build/**/*').pipe(s3(configs, {
  uploadPath: '/loginbuilder',
})));
