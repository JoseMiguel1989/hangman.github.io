const tablero = document.querySelector("#tablero");
const pincel = tablero.getContext("2d");
const $pizarron = document.querySelector("#pizarron");
let partesDelAhorcado = 0;

function dibujarPizarron() {
  pincel.drawImage($pizarron, -30, -10, 715, 490);
}

function dibujarPalabraSecreta() {
  pincel.font = "35px Calibri";
  pincel.fillStyle = "white";
  pincel.strokeStyle = "blue";
  pincel.textAlign = "center";
  pincel.strokeText("La palabra secreta", tablero.width / 2 + 85, 175);
  pincel.fillText("La palabra secreta", tablero.width / 2 + 85, 175);
  pincel.strokeText(`era ${palabraSecreta}`, tablero.width / 2 + 85, 220);
  pincel.fillText(`era ${palabraSecreta}`, tablero.width / 2 + 85, 220);
}

function dibujarFinDelJuego() {
  pincel.font = "35px Calibri";
  pincel.fillStyle = "red";
  pincel.strokeStyle = "white";
  pincel.textAlign = "center";
  pincel.strokeText("GAME OVER!!!", tablero.width / 2 + 85, 290);
  pincel.fillText("GAME OVER!!!", tablero.width / 2 + 85, 290);
  dibujarPalabraSecreta();
}

function dibujarCaraAhorcadoGanador() {
  pincel.strokeStyle = "white";
  //OJO IZQUIERDO
  pincel.lineWidth = 3;
  pincel.beginPath();
  pincel.arc(190, 145, 3, 0, 2 * Math.PI);
  pincel.stroke();
  //OJO DERECHO
  pincel.lineWidth = 3;
  pincel.beginPath();
  pincel.arc(210, 145, 3, 0, 2 * Math.PI);
  pincel.stroke();
  //BOCA FELIZ
  pincel.lineWidth = 3;
  pincel.moveTo(190, 160);
  pincel.bezierCurveTo(190, 170, 210, 170, 210, 160);
  pincel.stroke();
}

function dibujarCaraAhorcadoPerdedor() {
  pincel.strokeStyle = "white";
  pincel.lineWidth = 2;
  pincel.beginPath();
  //OJO IZQUIERDO
  pincel.moveTo(185, 140);
  pincel.lineTo(195, 150);
  pincel.moveTo(185, 150);
  pincel.lineTo(195, 140);
  //OJO DERECHO
  pincel.moveTo(205, 140);
  pincel.lineTo(215, 150);
  pincel.moveTo(205, 150);
  pincel.lineTo(215, 140);
  //BOCA TRISTE
  pincel.lineWidth = 3;
  pincel.moveTo(190, 170);
  pincel.bezierCurveTo(190, 160, 210, 160, 210, 170);
  pincel.stroke();
}

function dibujarMensajePerdiste() {
  pincel.font = "35px Calibri";
  pincel.fillStyle = "red";
  pincel.strokeStyle = "white";
  pincel.textAlign = "center";
  pincel.strokeText("Oh no, perdiste!!!", tablero.width / 2 + 50, 125);
  pincel.fillText("Oh no, perdiste!!!", tablero.width / 2 + 50, 125);
}

function dibujarMensajeGanaste() {
  pincel.font = "35px Calibri";
  pincel.fillStyle = "Darkgreen";
  pincel.strokeStyle = "white";
  pincel.textAlign = "center";
  pincel.strokeText("Ay si, ganaste!!!", tablero.width / 2 + 80, 125);
  pincel.fillText("Ay si, ganaste!!!", tablero.width / 2 + 80, 125);
}

function dibujarLetraIncorrecta(letrapresionada) {
  const NUMERO_PARA_CORTAR_ITERACION = 100;
  for (let i = 0; i < letrasEquivocadas.length; i++) {
    if (letrasEquivocadas[i] === " ") {
      letrasEquivocadas[i] = letrapresionada;
      i = NUMERO_PARA_CORTAR_ITERACION;
    }
  }
  let palabraAImprimir = letrasEquivocadas.join("");
  pincel.font = "30px Lucida Console";
  pincel.fillStyle = "coral";
  pincel.strokeStyle = "black";
  pincel.textAlign = "center";
  pincel.strokeText(palabraAImprimir, tablero.width / 2, 65);
  pincel.fillText(palabraAImprimir, tablero.width / 2, 65);
  pincel.font = "30px Lucida Console";
  pincel.fillStyle = "white";
  pincel.strokeStyle = "blue";
  pincel.textAlign = "center";
  pincel.strokeText("LETRAS EQUIVOCADAS", tablero.width / 2, 25);
  pincel.fillText("LETRAS EQUIVOCADAS", tablero.width / 2, 25);
}

function dibujarLetraCorrecta(letrapresionada) {
  for (let i = 0; i < palabraSecretaEnArray.length; i++) {
    if (letrapresionada === palabraSecretaEnArray[i]) {
      palabraFormadaPorElUsuario[i] = letrapresionada;
    }
  }
  let palabraAImprimir = palabraFormadaPorElUsuario.join(" ");
  pincel.font = "30px Lucida Console";
  pincel.fillStyle = "white";
  pincel.textAlign = "center";
  pincel.fillText(palabraAImprimir, (tablero.width - 20) / 2, 375);
}

function dibujarGuionesPalabraSecreta(palabrasecreta) {
  let guionesPalabraSecreta = "";
  pincel.font = "bold 30px Lucida Console";
  pincel.fillStyle = "white";
  pincel.textAlign = "center";
  for (let i = 0; i < palabrasecreta.length; i++) {
    guionesPalabraSecreta += "_ ";
  }
  pincel.fillText(guionesPalabraSecreta, tablero.width / 2, 385);
}

function dibujarPieDerechoDelAhorcado() {
  pincel.beginPath();
  pincel.moveTo(200, 249);
  pincel.lineTo(220, 285);
  pincel.moveTo(219, 285);
  pincel.lineTo(235, 285);
  pincel.stroke();
}

function dibujarPieIzquierdoDelAhorcado() {
  pincel.beginPath();
  pincel.moveTo(200, 249);
  pincel.lineTo(180, 285);
  pincel.moveTo(181, 285);
  pincel.lineTo(165, 285);
  pincel.stroke();
}

function dibujarBrazoDerechoDelAhorcado() {
  pincel.beginPath();
  pincel.moveTo(200, 185);
  pincel.lineTo(220, 220);
  pincel.stroke();
}

function dibujarBrazoIzquierdoDelAhorcado() {
  pincel.beginPath();
  pincel.moveTo(200, 185);
  pincel.lineTo(180, 220);
  pincel.stroke();
}

function dibujarTroncoDelAhorcado() {
  pincel.beginPath();
  pincel.moveTo(200, 180);
  pincel.lineTo(200, 250);
  pincel.stroke();
}

function dibujarCabezaDelAhorcado() {
  pincel.beginPath();
  pincel.arc(200, 155, 25, 0, 2 * Math.PI);
  pincel.stroke();
}

function dibujarBaseParaElAhorcado() {
  pincel.beginPath();
  pincel.moveTo(40, 320);
  pincel.lineTo(280, 320);
  pincel.moveTo(70, 320);
  pincel.lineTo(72, 80);
  pincel.moveTo(70, 80);
  pincel.lineTo(200, 82);
  pincel.moveTo(200, 80);
  pincel.lineTo(200, 130);
  pincel.moveTo(70, 120);
  pincel.lineTo(110, 80);
  pincel.stroke();
}
const MEDIO_SEGUNDO_EN_MILISEGUNDOS = 500;
const $sonidoPerdedor = document.querySelector("#sonido-derrota");
function dibujarAhorcado() {
  pincel.strokeStyle = "white";
  pincel.lineJoin = "round";
  pincel.lineCap = "round";
  pincel.lineWidth = 5;
  partesDelAhorcado = partesDelAhorcado + 1;
  if (partesDelAhorcado === 1) {
    dibujarBaseParaElAhorcado();
  }
  if (partesDelAhorcado === 2) {
    dibujarCabezaDelAhorcado();
  }
  if (partesDelAhorcado === 3) {
    dibujarTroncoDelAhorcado();
  }
  if (partesDelAhorcado === 4) {
    dibujarBrazoIzquierdoDelAhorcado();
  }
  if (partesDelAhorcado === 5) {
    dibujarBrazoDerechoDelAhorcado();
  }
  if (partesDelAhorcado === 6) {
    dibujarPieIzquierdoDelAhorcado();
  }
  if (partesDelAhorcado === 7) {
    dibujarPieDerechoDelAhorcado();
    dibujarCaraAhorcadoPerdedor();
    setTimeout(() => {
      $sonidoPerdedor.play();
    }, MEDIO_SEGUNDO_EN_MILISEGUNDOS * 1.5);
    setTimeout(dibujarFinDelJuego(), MEDIO_SEGUNDO_EN_MILISEGUNDOS);
    dibujarMensajePerdiste();
    deshabilitarTeclado();
  }
}
