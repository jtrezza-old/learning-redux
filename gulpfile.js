var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("es6fy", function () {
  return gulp.src("./index.js")
    .pipe(babel({
      presets: ['es2015', 'react']
    }))
    .pipe(gulp.dest("dist"));
});

gulp.task('es6fy:watch', function(){
  gulp.watch('./index.js', ['es6fy']);
});