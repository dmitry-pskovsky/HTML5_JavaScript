var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("build1", function () {
    return gulp.src("src/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("es5"));
});
