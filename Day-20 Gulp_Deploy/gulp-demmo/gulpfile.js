let gulp = require("gulp"); //es5
const { src, dest, parallel, series, watch } = require("gulp");




const imagemin = require("gulp-imagemin");
const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");
const terser = require("gulp-terser");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");



function copyHtml() {
  return src("src/*.html").pipe(dest("dist"));
}







function imgTask() {
  return src("src/images/*").pipe(imagemin()).pipe(dest("dist/images"));
}

function soundTask() {
  return src("src/sounds/*.mp3").pipe(dest("dist/sounds"));
}
const jsPath = "src/**/*.js";
const cssPath = "src/**/*.css";

function jsTasks() {
  return src(jsPath)
    .pipe(sourcemaps.init())
    .pipe(concat("all.js"))
    .pipe(terser())
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist/assets/js"));
}

function cssTask() {
  return src(cssPath)
    .pipe(sourcemaps.init())
    .pipe(concat("combineStyle.css"))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist/assets/cs"));
}

function watchTask() {
  watch([jsPath, cssPath], { interval: 1000 }, parallel(jsTasks, cssTask));
}
// exports.copyHtml = copyHtml;
// exports.default = parallel(copyHtml, imgTask, jsTasks);
// exports.default = series(copyHtml, imgTask, jsTasks, cssTask);
exports.default = series(
  parallel(copyHtml, imgTask, jsTasks, cssTask, soundTask),
  watchTask
);
