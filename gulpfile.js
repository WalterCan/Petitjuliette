const { src, dest, watch, parallel } = require("gulp");
const gulpPlumber = require("gulp-plumber");
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");

function css(done) {
  // PAra compilar la hoja de estilo scss, hay que realizar tres pasos

  src("../Petitjuliette/src/scss/**/*.scss") // Primero, identificar el archivo de sass
    .pipe(plumber())
    .pipe(sass()) // Segundo, compilarlo
    .pipe(dest("../Petitjuliette/build/css")); // Tercero, Almacenarlo o guardarlo en el disco duro

  done(); //Callback, es una funcion que se manada a llamar despues de una función, forma anterior de tener codigo asincrono.
}

function dev(done) {
  watch("../Petitjuliette/src/scss/**/*.scss", css);
  done();
}

exports.css = css;
exports.dev = dev;
