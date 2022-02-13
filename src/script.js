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
    if ($elemento.classList.contains('cuadro')) {
      manejarClickCuadro($elemento);
    }
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

function manejarClickCuadro($cuadroActual) {
  mostrarCuadro($cuadroActual);

  if ($primerCuadro === null) {
    $primerCuadro = $cuadroActual;
  } else {
    if ($primerCuadro === $cuadroActual) {
      return;
    }

    turnos++;

    if (cuadrosSonIguales($primerCuadro, $cuadroActual)) {
      eliminarCuadro($primerCuadro);
      eliminarCuadro($cuadroActual);
    } else {
      ocultarCuadro($primerCuadro);
      ocultarCuadro($cuadroActual);
    }
    $primerCuadro = null;
  }
}

function cuadrosSonIguales($cuadro1, $cuadro2) {
  return $cuadro1.className === $cuadro2.className;
}

function mostrarCuadro($cuadro) {
  $cuadro.style.opacity = '1';
}

function ocultarCuadro($cuadro) {
  setTimeout(function () {
    $cuadro.style.opacity = '0';
  }, 500);
}

function eliminarCuadro($cuadro) {
  setTimeout(function () {
    $cuadro.parentElement.classList.add('completo');
    $cuadro.remove();
    evaluarFinDeJuego();
  }, 500);
}

function evaluarFinDeJuego() {
  if (document.querySelectorAll('.cuadro').length === 0) {
    $tablero.style.display = 'none';
    $mensajeFinJuego.querySelector('strong').textContent = turnos.toString();
    $mensajeFinJuego.style.display = 'block';
  }
}

configurarJuego();
