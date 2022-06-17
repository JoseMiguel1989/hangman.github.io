function ocultarElemento(elemento) {
  elemento.classList.add("oculto");
}

function mostrarElemento(elemento) {
  elemento.classList.remove("oculto");
}

const $mensajesAlUsuario = document.querySelector("#mensajes-al-usuario");
function eliminarError() {
  $mensajesAlUsuario.textContent = "";
  $mensajesAlUsuario.classList.remove("error");
  ocultarElemento($mensajesAlUsuario);
}

function mostrarError(error) {
  $mensajesAlUsuario.textContent = error;
  $mensajesAlUsuario.classList.add("error");
  mostrarElemento($mensajesAlUsuario);
}

function mostrarMensaje(mensaje) {
  document.querySelector("#mensaje-de-modal").textContent = mensaje;
  if (!$modal.open) {
    $modal.showModal();
    deshabilitarTeclado();
  }
}

const $btnCerrarModal = document.querySelector("#btn-cerrar-modal");
const $modal = document.querySelector("#modal");
$modal.onclick = function ocultarModal(ev) {
  var rect = $modal.getBoundingClientRect();
  var { clientX: x, clientY: y } = ev;
  if (
    x < rect.x ||
    x > rect.x + rect.width ||
    y < rect.y ||
    y > rect.y + rect.height
  ) {
    $modal.close();
    if (palabraSecreta.length > 0) {
      habilitarTeclado();
    }
  }
};

$btnCerrarModal.onclick = function (ev) {
  ev.preventDefault();
  $modal.close();
  if (palabraSecreta.length > 0) {
    habilitarTeclado();
  }
};
