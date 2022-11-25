// Ejemplo con Modo Estricto:
// =============================================================
// El modo estricto te OBLIGA a declarar espesificamente
// las variables que se van a utilizar.
"use strict";
let pi = 3.1416;
console.log(pi);

function myFunction() {
  return (pi = 3.1416);
}

console.log(myFunction());

// Ejemplo SIN modo Estricto:
// =============================================================
// El modo sin estricto NO te OBLIGA a declarar espesificamente
// las variables que se van a utilizar, porque las declaraciones
// las INTERPRETA en el hosting, en el tiempo de compilacion.
pi = 3.1416;
console.log(pi);

function myFunction() {
  return (pi = 3.1416);
}

console.log(myFunction());
