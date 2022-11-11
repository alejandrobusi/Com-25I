// Funciones declarativas
const undefinedUser = 'user';
const alumnos = ['ale', 'ivan', 'gabriel'];

// function findUserByName (listOfStundets, studentName) {
//   for (let i = 0; i < listOfStundets.length; i++) {
//     if (listOfStundets[i] == studentName) {
//       return `Se encontro el alumnos ${listOfStundets[i]}`;
//     }
//   }
// };

// const result = findUserByName(alumnos, 'ivan');
// console.log(result);

// Funciones Anonimas

// const saludar2 = function (listOfStundets, studentName) {
//   for (let i = 0; i < listOfStundets.length; i++) {
//     if (listOfStundets[i] == studentName) {
//       return `Se encontro el alumnos ${listOfStundets[i]}`;
//     }
//   }
// };

// console.log(saludar2(alumnos, 'ivan'));

// Function arrow o funcion flecha

const suma = (a, b) => {
  return a + b;
};
// Funcion flecha resumida (sin parentesis)
const suma2 = a => a * 2;
// Funcion flecha sin parametros de entrada
const suma3 = () => 12 * 2;

// operador ternario

// console.log( 10 == 10 ? 'yes' : 'nop');

// if (10 == 10) {
//   console.log('yes');
// } else {
//   console.log('nop');
// };

// console.log( 10 == 10 && 'sipi');

// // Funciones dinamicas

let age = prompt('Ingresa tu edad');

const isOld = (age >= 18) 
? () => {
  return 'Eres mayor';
}
: () => {
  return 'Eres menor';
};

isOld();
console.log(isOld());
const esMayor = (age >= 18) ? true : false;

console.log(esMayor);
// Scope Global

const userName = 'rodo';

var name = 'alvarito';
const saludar5 = () => {
  let userName = 'ivan';
  console.log(userName);
};

const a = 1;
const b = 2;

const sumar = () => {
  console.log(a + b);
};


// Scope Local

const saludo1 = () => {
  let user = 'rodo';
  console.log(user);
};

if (true) {
  var student = 'arnold';
}
student = 'pia';
console.log(student);


