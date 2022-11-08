const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");

gulp.task("sass", (fn) => {
    gulp
        .src(__dirname + "/resources/scss/*.scss")
        .pipe(sass())
        .pipe(
            gulp.dest((f) => f.base)
        );
    fn();
});

gulp.task("minify", () => {
    return gulp.src(__dirname + "/resources/scss/*.css")
                .pipe(cleanCSS({compatibility: "ie9"}))
                .pipe(gulp.dest("resources/css"));        
})
