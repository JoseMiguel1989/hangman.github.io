const $tablero = document.querySelector("#tablero");
let palabraSecreta = "";
let palabraSecretaEnArray = [];
let palabraFormadaPorElUsuario = [];
let letrasEquivocadas = [];
const $contenedorBotonesIniciarJuego = document.querySelector(
  "#contenedor-iniciar-juego"
);
const $btnIniciarJuego = document.querySelector("#iniciar-juego");
$btnIniciarJuego.onclick = function (event) {
  event.preventDefault();
  palabraSecreta = crearPalabraSecreta();
  palabraSecretaEnArray = palabraSecreta.split("");
  mostrarElemento($tablero);
  dibujarGuionesPalabraSecreta(palabraSecreta);
  dibujarAhorcado();
  ponerEspaciosVaciosEnPalabraFormadaPorElUsuario();
  inicializarVacioLetrasEquivocadas();
  ocultarElemento($contenedorBotonesIniciarJuego);
  mostrarElemento($contenedorBotonesNuevoJuegoDesistir);
  habilitarTeclado();
};

const $btnAgregarNuevaPalabra = document.querySelector(
  "#agregar-nueva-palabra"
);
$btnAgregarNuevaPalabra.onclick = function (event) {
  event.preventDefault();
  ocultarElemento($contenedorBotonesIniciarJuego);
  mostrarElemento($contenedorBotonesAgregarPalabra);
};

const $contenedorBotonesAgregarPalabra = document.querySelector(
  "#contenedor-agregar-palabra"
);
const $inputPalabraSecretaAAgregar = document.querySelector(
  "#palabra-secreta-a-agregar"
);
const $btnGuardarYEmpezar = document.querySelector("#guardar-y-empezar");
$btnGuardarYEmpezar.onclick = function (event) {
  event.preventDefault();
  const error = validarPalabra($inputPalabraSecretaAAgregar.value);
  if (error.length > 0) {
    mostrarError(error);
  } else {
    eliminarError();
    palabrasDelJuego.push($inputPalabraSecretaAAgregar.value);
    const mensaje = "SU PALABRA HA SIDO AGREGADA!";
    $sonidoCorrecto.play();
    mostrarMensaje(mensaje);
    $inputPalabraSecretaAAgregar.value = "";
    ocultarElemento($contenedorBotonesAgregarPalabra);
    mostrarElemento($contenedorBotonesIniciarJuego);
  }
};

const $btnCancelarNuevaPalabra = document.querySelector(
  "#cancelar-nueva-palabra"
);
$btnCancelarNuevaPalabra.onclick = function (event) {
  event.preventDefault();
  eliminarError();
  const mensaje = "NO AGREGO NINGUNA PALABRA!";
  mostrarMensaje(mensaje);
  $sonidoIncorrecto.play();
  $inputPalabraSecretaAAgregar.value = "";
  ocultarElemento($contenedorBotonesAgregarPalabra);
  mostrarElemento($contenedorBotonesIniciarJuego);
};

const $btnNuevoJuego = document.querySelector("#nuevo-juego");
$btnNuevoJuego.onclick = function (event) {
  event.preventDefault();
  reiniciarJuego();
  $btnIniciarJuego.click();
};

const $contenedorBotonesNuevoJuegoDesistir = document.querySelector(
  "#contenedor-nuevo-juego-desistir"
);
const $btnDesistir = document.querySelector("#desistir");
$btnDesistir.onclick = function (event) {
  event.preventDefault();
  ocultarElemento($tablero);
  reiniciarJuego();
  deshabilitarTeclado();
  mostrarElemento($contenedorBotonesIniciarJuego);
  ocultarElemento($contenedorBotonesNuevoJuegoDesistir);
};
