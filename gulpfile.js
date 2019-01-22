var gulp = require("gulp");
var GulpConfig = require("./gulpconfig");
var ts = require("gulp-typescript");
var sourcemaps = require("gulp-sourcemaps");
var run = require("gulp-run");
var del = require("del");

var config = new GulpConfig();

gulp.task("clean", function(done) {
  del.sync([config.paths.dist + "/**"]);
  done();
});

gulp.task("default", function(done) {
  var tsResult = gulp
    .src([config.paths.tsx, config.paths.tsf])
    .pipe(sourcemaps.init())
    .pipe(
      ts({
        module: "commonjs",
        noImplicitAny: true,
        removeComments: true,
        preserveConstEnums: true,
        sourceMap: true,
        jsx: "react"
      })
    );
  tsResult.js.pipe(sourcemaps.write()).pipe(gulp.dest(config.paths.tsjsOut));
  done();
});

gulp.task("start", function(done) {
  run("node ./dist/main.js").exec();
  done();
});
