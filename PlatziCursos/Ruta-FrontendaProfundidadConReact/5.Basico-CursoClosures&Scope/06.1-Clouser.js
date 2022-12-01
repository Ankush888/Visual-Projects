function greeting() {
  let username = "Oscar";

  function displayUserName() {
    return `Hello ${username}`;
  }
  return displayUserName;
}

const g = greeting();
console.log(g); // Retornando la función: La definición que tiene.
console.log(g()); // Ejecutando la función.
