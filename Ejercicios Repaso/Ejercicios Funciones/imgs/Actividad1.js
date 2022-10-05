/* DECLARACION de VARIABLES GLOBALES: ============================*/
var showMinuts = document.getElementById("minutos");
var showSeconds = document.getElementById("segundos");
var showCentecims = document.getElementById("centecimas");

var minuts = 0;
var seconds = 0;
var centecimes = 0;

var varTemporizador;

function mostrar() {
    showCentecims.innerText = formatearNumero(centecimes);
    showSeconds.innerText = formatearNumero(seconds);
    showMinuts.innerText = formatearNumero(minuts);
}

/*================================================================*/
function timer() {
    centecimes++;

    if (centecimes >= 100) {
        centecimes = 0;
        seconds += 1;
    }

    if (seconds >= 60) {
        seconds = 0;
        minuts += 1;
    }

    if (minuts >= 60) {
        clearInterval(varTemporizador);
    }

    mostrar();
}

/*================================================================*/
function iniciar() {

    var btnInicar = document.getElementById('btnIniciar');
    var btnReinicair = document.getElementById('btnReiniciar');

    if (btnInicar.innerText == "INICIAR") {
        // Ponemos en marcha el temporizador:
        varTemporizador = setInterval(timer, 10);

        // Cambiamos el texto del boton Inicia por Apagar:
        btnInicar.innerText = "APAGAR";

        // Hacemos vivible el boton REINICIAR:
        btnReinicair.disabled = true;

    } else {
        // Cambiamos el texto del boton Apagar por Iniciar:
        btnInicar.innerText = "INICIAR";

        // Paramos el temporizador:
        clearInterval(varTemporizador);

        // Mostramos los datos del temporizador PARADO.
        mostrar();
        btnReinicair.disabled = false;
    }
}

/*================================================================*/
function reIniciar() {

    // Ponemos a 0 los minutos, segundos y las centecimas:
    minuts = 0;
    seconds = 0;
    centecimes = 0;

    // Mostramos los datos del temporizador PARADO.
    mostrar();
}

/*================================================================*/
/*Funcion para poner un 0 delante de los minutos y segundos y 
 * centecimas si el numero es menor a 9.*/
function formatearNumero(num) {

    if (num < 10) {
        return '0' + num;
    } else {
        return num;
    }
}

      