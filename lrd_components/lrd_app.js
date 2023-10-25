var piedra = 0;
var papel = 1;
var tijera = 2;
var opciones = ["lrd_piedra", "lrd_papel", "lrd_tijera"];

var jugadorEleccion = document.getElementById("lrd_jugador_eleccion");
var computadoraEleccion = document.getElementById("lrd_computadora_eleccion");
var textoResultado = document.getElementById("lrd_texto_resultado");

var piedraBoton = document.getElementById("lrd_piedra");
var papelBoton = document.getElementById("lrd_papel");
var tijeraBoton = document.getElementById("lrd_tijera");

// Funciones
function lrd_aleatorio(minimo, maximo) {
  var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
  return numero;
}

function lrd_jugar(opcion) {
  var opcionJugador = opcion;
  var opcionComputadora = lrd_aleatorio(0, 2);
  console.log("Jugador eligió: " + opciones[opcionJugador]);
  console.log("Computadora eligió: " + opciones[opcionComputadora]);

  jugadorEleccion.src = "lrd_imagenes/" + opciones[opcionJugador] + ".png";
  computadoraEleccion.src = "lrd_imagenes/" + opciones[opcionComputadora] + ".png";

  jugadorEleccion.src = "lrd_imagenes/" + opciones[opcionJugador] + ".png";
  computadoraEleccion.src = "lrd_imagenes/" + opciones[opcionComputadora] + ".png";

  if (opcionJugador == piedra) {
    if (opcionComputadora == piedra) {
      lrd_texto_resultado.textContent = "Empate";
    } else if (opcionComputadora == papel) {
      lrd_texto_resultado.textContent = "Perdiste";
    } else if (opcionComputadora == tijera) {
      lrd_texto_resultado.textContent = "Ganaste";
    }
  } else if (opcionJugador == papel) {
    if (opcionComputadora == piedra) {
      lrd_texto_resultado.textContent = "Ganaste";
    } else if (opcionComputadora == papel) {
      lrd_texto_resultado.textContent = "Empate";
    } else if (opcionComputadora == tijera) {
      lrd_texto_resultado.textContent = "Perdiste";
    }
  } else if (opcionJugador == tijera) {
    if (opcionComputadora == piedra) {
      lrd_texto_resultado.textContent = "Perdiste";
    } else if (opcionComputadora == papel) {
      lrd_texto_resultado.textContent = "Ganaste";
    } else if (opcionComputadora == tijera) {
      lrd_texto_resultado.textContent = "Empate";
    }
  }
}

// Eventos
piedraBoton.addEventListener("click", function () {
  lrd_jugar(piedra);
});

papelBoton.addEventListener("click", function () {
  lrd_jugar(papel);
});

tijeraBoton.addEventListener("click", function () {
  lrd_jugar(tijera);
});
