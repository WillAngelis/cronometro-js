const {src,dest} = require('gulp');
const minifyJs = require('gulp-uglify');


const createJs = () =>{
  return src('./js/**/*.js')
  .pipe(minifyJs())
  .pipe(dest('./dist/js'));
}

exports.createJs = createJs;
