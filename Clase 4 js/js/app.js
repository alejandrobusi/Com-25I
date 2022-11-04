// var msg = 'Hello Com';
// let msg2 = 'Hello Com';
// const msg3 = 'Hello Com';

// console.log(msg);
// console.warn(msg2);
// console.error(msg3);

// console.group('Grupo de valores a mostrar')
// console.log(msg);
// console.log(msg2);
// console.log(msg3);
// console.groupEnd();

// //-----------------------

// let user1 = 'Ivan';
// let user2 = 'Ale';
// let user3 = 'Mauro';

let alumnos = ['Ivan', 'Matias',  'Mauro','Marcos', 'Rocio'];
let numbers = [ 101, 200, 300 ];
console.log(alumnos);
// console.log(alumnos[ alumnos.length - 1 ]);

// for(let i = 0; i < alumnos.length; i++) {
//   if (typeof(alumnos[i]) == 'number') {
//     alert(`Se encontro un numero. ${alumnos[i]} en la posicion ${i}.`)
//   };
// };

// Añadir items a un array(al final)

alumnos.push('rolling', 'Code');


// Como eliminar el ultimo elemento de un array

alumnos.pop();
console.log(alumnos);

// Añadir elemento al princio del array

alumnos.unshift('lenovo');
console.log(alumnos);

// Eliminar el primer item de un array

alumnos.shift();
console.log(alumnos);

// encontrar el indice de un alumno con su nombre

// console.log(alumnos.indexOf('Matiaas'));
// const indexOfStudent = alumnos.indexOf('Rocio');
// if (indexOfStudent != -1 ) {
//   alert(`Se encontro a ${alumnos[indexOfStudent]} en la posicion ${indexOfStudent}`);
// } else {
//   alert('No se encontraron coindicencias');
// };

// alumnos.map((alumno) => {
//   if(alumno == 'Rocio') {
//     alert(`Se encontro a ${alumno}`)
//   }
// })
// Eliminar un elemento en particular. con su posicion

// alumnos.splice(1,1);
// console.log(alumnos);
// const indexOfStudent = alumnos.indexOf('Rocio');
// if (indexOfStudent != -1 ) {
//   alert(`Se encontro a ${alumnos[indexOfStudent]} en la posicion ${indexOfStudent}, y se ha eliminado`);
//   alumnos.splice(indexOfStudent,1);
//   console.log(alumnos);
// } else {
//   alert('No se encontraron coindicencias');
// };

// Añadir nuevos items al array con splice

// alumnos.splice(1,1,'Mariano',12);
// console.log(alumnos);

// alumnos.splice(0)

// Concatenar 2 arrays
// let cars = ['fiat', 'peugeot', 'citroen'];
// const newArray = alumnos.concat(numbers, cars);
// console.log(newArray);

// // Determinar si existe un  alumno x en el array

// console.log(newArray.includes(101));

// // Invertir 

// console.log(newArray.reverse());

// // ordenar items en un array

// console.log(newArray.sort())

// // extraer sierta parte de un array
// let studentName = 'Ivancillo';
// const sliceado = studentName.slice(0,4);
// console.log(sliceado);

const age = parseInt(prompt('Ingresa tu edad'));

if (!isNaN(age)) {
  if (age >= 18) {
    alert('Eres mayor de edad');
  } else {
    alert('No eres mayor de edad');
  }
} else {
  alert('No te hagas el bobina');
};