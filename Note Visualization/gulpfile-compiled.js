"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var gulp, babel;
    return {
        setters: [],
        execute: function () {
            gulp = require("gulp");
            babel = require("gulp-babel");


            gulp.task("build", function () {
                return gulp.src("src/*.js").pipe(babel()).pipe(gulp.dest("es5"));
            });
        }
    };
});

//# sourceMappingURL=gulpfile-compiled.js.map