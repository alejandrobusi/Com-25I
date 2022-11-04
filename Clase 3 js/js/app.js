// document.write('<img src="https://picsum.photos/200/300?random=1">');
// document.write('</br>');
// document.write(3 + 5);
// document.write('<h1 style="color: red;">Hola</h1>');

// const userName = prompt('Hey, ingresa tu nombre');
// document.write('Bienvenido ' + userName);
// document.write('</br>');
// document.write(`Bienvenido ${userName}`);

// let num1 = parseFloat(prompt('ingresa el primer numero'));
// let num2 = parseFloat(prompt('ingresa el segundo numero'));
// let num3 = parseFloat(prompt('ingresa el tercer numero'));

/*if (isNaN(num1) || isNaN(num2)) {
  alert('Estas ingresando verdura');
} else {
  document.write(num1 + num2);
}*/

// if (num1 > num2) {
//   alert(`El numero ${num1} es el mayor`);
// } else if (num2 > num1) {
//   alert(`El numero ${num2} es el mayor`);
// } else {
//   alert(`son iguales`);
// };

// if (num1 > num2 && num1 > num3) {
//   alert(`El numero ${num1} es el mayor.`);
// } else if (num2 > num3) {
//   alert(`El numero ${num2} es el mayor.`);
// } else {
//   alert(`El numero ${num3} es el mayor.`);
// }

// --------------------

// let isDiv = parseFloat(prompt('ingresa un numero'));

// if (isDiv % 2 == 0) {
//   alert(`El numero ${isDiv} es divisible por 2`)
// } else {
//   alert(`El numero NOOO ${isDiv} es divisible por 2`)
// }

// const frase = prompt('Ingresa una frase').toLowerCase();
// let vocales = "";
// for (let i = 0; i < frase.length; i++) {
//   if (frase[i] == 'a'|| frase[i] == 'e' || frase[i] == 'i' || frase[i] == 'o' || frase[i] == 'u') {
//     vocales = vocales + frase[i];
//   }
// };
// if (vocales.length != 0) {
//   console.log(vocales);
// } else {
//   console.log('No se encontraron vocales.');
// };


const inputNumber = parseInt(prompt('Ingresa un numero'));

if (inputNumber % 2 == 0) {
  alert('Es divisible por 2');
} else if(inputNumber % 3 == 0 ){
  alert('Es divisible por 3');
} else if (inputNumber % 5 == 0) {
  alert('Es divisible por 5');
} else if (inputNumber % 7 == 0) {
  alert('Es divisible por 7');
} else {
  alert('No es divisible por 2, 3, 5 o 7.')
}