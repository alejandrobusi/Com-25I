// let saludo = "Hola, mi NOmbre es";
// let userName = "Alejandro";
// let userLastName = "busi";

// const presentation = "Hola, mi nombre es" + userName + " " + userLastName;

// const presentation2 = `${saludo} ${userName} ${userLastName}`

// const todoEnMayus = presentation2.toUpperCase();
// console.log(todoEnMayus);
// const todoEnMin = presentation2.toLowerCase();
// console.log(todoEnMin);

// let ultimaPos = userLastName[userLastName.length -1];
// console.log(ultimaPos);
// let UltimaPos2 = userLastName.charAt(userLastName.length -1 );
// console.log(UltimaPos2);

// let apellidoIngresado = prompt('Ingresa tu apellido').trim();
// let primerLetra = apellidoIngresado.charAt(0);
// let letraEnMayus = primerLetra.toUpperCase();
// let restoDelApellido = apellidoIngresado.substring(1);
// console.log(`${letraEnMayus}${restoDelApellido}`);

// const txt = '   alejandro Busi  ';
// console.log(txt.trim());

// const txt2 = 'Hola Mundo';

// console.log(txt2.repeat(2));

// const txt3 = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

// const userInput = prompt('ingresa una palabra');
// const isInclude = txt3.includes(userInput);

// isInclude ? alert('Si se encontro coincidencia') : alert('No se encontro coincidencia');

// Metodos para numeros.

let num1 = 44.50;

let num2 = 25;

let num3 = 34.1232131;

// Redondear para abajo

console.log(Math.floor(num1));

// Redondear al numero mas cercano

console.log(Math.round(num1));

// Retornar el numero mas grande

console.log(Math.max(num1, num2, num3));

// Retornar el numero Mas pequeño

console.log(Math.min(num1, num2, num3));

// Elevar a la potencia
const base = parseInt('4');
const exponente = 2;

console.log(Math.pow(base, exponente));

// Obtener raiz cuadrada

console.log(Math.sqrt(num2));

// Como obtener numeros con dos decimales

console.log(Math.round(num3 *100) / 100);
console.log(Number(num3.toFixed(2)));

// Eliminar Decimales

console.log(Math.trunc(num3));

// Obtener numero aleatorio

console.log(Math.floor(Math.random() * 10 ));

// Redondear para arriba

console.log(Math.ceil(num3));


// const numMatch = () => {
//   const userIdInput = prompt('Ingresa tu DNI');
//   console.log(userIdInput);
//   if (userIdInput !== null) {
    
//   } else {
    
//   }
//   const letters = 'TRWAGMYFPDXBNJZSQVHLCKE';
//   const result = letters.charAt(userIdInput % 23);
//   alert(result);
// }

function random() { return Math.floor((Math.random() * (100 - 50 + 1)) + 50); } 