const { src } = require("gulp");
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const jsMinifier = require("gulp-minify");

gulp.task("sass", (fn) => {
    gulp
        .src(__dirname + "/resources/scss/*.scss")
        .pipe(sass())
        .pipe(
            gulp.dest((f) => f.base)
        );
    fn();
});

// gulp.task("minifyjs", async (fn) => {
//     gulp.src([`${__dirname}/resources/js/*.js`])
//         .pipe(minify())
//         .pipe(gulp.dest(`${__dirname}/resources/js/deploy`))
//     fn();
//   });

gulp.task("minify", (fn) => {
    gulp.src("resources/scss/*.css")
        .pipe(cleanCSS({compatibility: "ie9"}))
        .pipe(gulp.dest("resources/css"));

    gulp.src([`${__dirname}/resources/js/*.js`])
        .pipe(jsMinifier())
        .pipe(gulp.dest(`${__dirname}/resources/js`));

    fn();
})
