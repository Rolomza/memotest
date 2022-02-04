let turnos = 0;
let $primerCuadro = null;
const $tablero = document.querySelector('#tablero');
const $cuadros = $tablero.querySelectorAll('.cuadro');
const $mensajeFinJuego = document.querySelector('#fin-juego');

function configurarJuego() {
  const coloresBase = ['rojo', 'verde', 'azul', 'negro', 'blanco', 'amarillo'];
  const coloresRepetidos = coloresBase.concat(coloresBase); //Esta linea duplica los colores, 12 colores para los 12 cuadros
  configurarCuadros($cuadros, coloresRepetidos);
  manejarEventos($tablero);
}

function manejarEventos($tablero) {
  $tablero.onclick = function (e) {
    debugger;
    const $elemento = e.target;
  };
}

function configurarCuadros($cuadros, colores) {
  const coloresRandom = colores.sort(function () {
    return 0.5 - Math.random();
  }); //Ordena el array de colores de forma aleatoria

  //   debugger;

  coloresRandom.forEach(function (color, i) {
    $cuadros[i].classList.add(color);
  });
}

configurarJuego();
