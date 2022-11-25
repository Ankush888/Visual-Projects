// Ejemplos de Redeclaración y Reasignación de variables:

// VAR:
// se puede acceder desde cualquier lugar del scope (es global).
// se puede redeclarar.
// se puede reasignar.

// LET:
// esta limitada por el scope donde es declarada.
// NO se puede redeclarar en el mismo scope.
// se puede reasignar.

// CONST:
// esta limitada por el scope donde es declarada.
// NO se puede redeclarar en el mismo scope.
// NO se puede reasignar.
// Nota: (Se pueden utilizar métodos como push o pop para los arrays
// debido a que los métodos hacen referencia a la constante declarada
// y no la están redeclarando o reasignando.)

var firstName; // Undefined
firstName = "Oscar";
console.log(firstName);

var lastName = "David"; // declarar / asignar
lastName = "Ana"; // reasignar
console.log(lastName);

var secondName = "David"; // declarando / asignando
var secondName = "Ana"; // reasignado
console.log(secondName);

// Let
let fruit = "Apple"; // declara y asignar
fruit = "Kiwi"; // reasignar
console.log(fruit);

let fruit = "Banana";
console.log(fruit);

// const
const animal = "dog"; // declara y asigna
// animal = 'cat'; // reasignado
const animal = "Snake";
console.log(animal);

const vehicles = [];
vehicles.push("HolaMundo");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);
