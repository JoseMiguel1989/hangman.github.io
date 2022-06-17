function reiniciarJuego() {
  tablero.width = tablero.width;
  dibujarPizarron();
  palabraSecreta = "";
  palabraSecretaEnArray = [];
  palabraFormadaPorElUsuario = [];
  letrasEquivocadas = [];
  partesDelAhorcado = 0;
}

function habilitarTeclado() {
  document.addEventListener("keydown", apretarTecla);
}

function deshabilitarTeclado() {
  document.removeEventListener("keydown", apretarTecla);
}

function inicializarVacioLetrasEquivocadas() {
  const MAXIMO_DE_LETRAS_EQUIVOCADAS = 24;
  for (let i = 0; i < MAXIMO_DE_LETRAS_EQUIVOCADAS; i++) {
    letrasEquivocadas.push(" ");
  }
}

function ponerEspaciosVaciosEnPalabraFormadaPorElUsuario() {
  for (let i = 0; i < palabraSecretaEnArray.length; i++) {
    palabraFormadaPorElUsuario.push(" ");
  }
}

function recargarPagina() {
  location.reload();
}

function validarPalabra(palabra) {
  const NUMERO_DE_LETRAS_NO_PERMITIDO = 9;
  if (palabra.length > NUMERO_DE_LETRAS_NO_PERMITIDO) {
    return "LA PALABRA INGRESADA TIENE MAS DE 8 LETRAS";
  }
  if (!/^[A-Z]+$/.test(palabra)) {
    return "SOLO SE ADMITEN MAYUSCULAS, SIN NUMEROS, ACENTOS, NI CARACTERES ESPECIALES!!!";
  }
  return "";
}

const palabrasDelJuego = [
  "DEVOPS",
  "ALURA",
  "ORACLE",
  "JAVASCRIPT",
  "HTML",
  "CSS",
  "JAVA",
  "PHYTON",
  "MYSQL",
  "CSHARP",
  "MONGODB",
  "RUBY",
  "TECLADO",
  "MOUSE",
  "MONITOR",
  "PARLANTE",
  "CPU",
  "GPU",
  "MEMORIA",
  "MOTHER",
  "RAM",
  "COOLER",
];
function crearPalabraSecreta() {
  const numeroElegido = Math.floor(Math.random() * palabrasDelJuego.length);
  const palabraSecretaElegida = palabrasDelJuego[numeroElegido];
  if (palabrasDelJuego.length > 0) {
    palabrasDelJuego.splice(numeroElegido, 1);
  } else {
    const mensaje = "YA NO QUEDAN PALABRAS PARA ADIVINAR!!!";
    mostrarMensaje(mensaje);
    setTimeout(recargarPagina, MEDIO_SEGUNDO_EN_MILISEGUNDOS * 5);
  }
  return palabraSecretaElegida;
}

const $sonidoCorrecto = document.querySelector("#sonido-correcto");
const $sonidoIncorrecto = document.querySelector("#sonido-incorrecto");
function verificarSiLaLetraCoincide(letrapresionada) {
  if (palabraSecreta.includes(`${letrapresionada}`)) {
    dibujarLetraCorrecta(letrapresionada);
    $sonidoCorrecto.play();
  } else {
    dibujarLetraIncorrecta(letrapresionada);
    dibujarAhorcado();
    $sonidoIncorrecto.play();
  }
}

const $sonidoSorpresa = document.querySelector("#sonido-sorpresa");
function verificarQueNoSeaLetraRepetida(letraPresionada) {
  if (
    letrasEquivocadas.includes(letraPresionada) ||
    palabraFormadaPorElUsuario.includes(letraPresionada)
  ) {
    const mensaje = "LETRA REPETIDA, ELIJA OTRA POR FAVOR!!!";
    mostrarMensaje(mensaje);
    $sonidoSorpresa.play();
    return false;
  }
  return true;
}

const $sonidoGanador = document.querySelector("#sonido-ganador");
const $sonidoTeclaPresionada = document.querySelector(
  "#sonido-presionar-tecla"
);
const letrasAceptadasEnMayusculas = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "Ñ",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const apretarTecla = function (e) {
  const letraPresionada = e.key;
  $sonidoTeclaPresionada.play();
  if (letrasAceptadasEnMayusculas.includes(`${letraPresionada}`)) {
    if (verificarQueNoSeaLetraRepetida(letraPresionada)) {
      verificarSiLaLetraCoincide(letraPresionada);
      if (
        JSON.stringify(palabraFormadaPorElUsuario) ===
        JSON.stringify(palabraSecretaEnArray)
      ) {
        dibujarMensajeGanaste();
        if (partesDelAhorcado >= 2) {
          dibujarCaraAhorcadoGanador();
        }
        setTimeout(() => {
          $sonidoGanador.play();
        }, MEDIO_SEGUNDO_EN_MILISEGUNDOS * 1.5);
        dibujarFinDelJuego();
        deshabilitarTeclado();
      }
    }
  } else {
    const mensaje = "SOLO SE ACEPTAN LETRAS MAYUSCULAS";
    mostrarMensaje(mensaje);
    $sonidoSorpresa.play();
  }
};
