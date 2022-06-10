const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function css(done) {
  // PAra compilar la hoja de estilo scss, hay que realizar tres pasos

  // Primero, identificar el archivo de sass

  src("../Petitjuliette/src/scss/app.scss")
    .pipe(sass()) // Segundo, compilarlo
    .pipe(dest("/build/css")); // Tercero, Almacenarlo o guardarlo en el disco duro

  done();
}

exports.css = css;
