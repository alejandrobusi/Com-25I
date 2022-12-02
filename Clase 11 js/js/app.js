// function Auto (marca, modelo, km) {
//   this.marca = marca;
//   this.modelo = modelo;
//   this.km = km;
//   this.kilometraje = (x = 2020) => {
//     alert(`Tiene ${this.km}km. ${x}`);
//   }
// };

// const nuevoAuto = new Auto('Peugeot', '308', 10000);

// const newObj = {};
// newObj.marca = () => alert('Hola');
// console.log(newObj);

// const obj1 = {name: 'juan'};
// const obj2 = obj1;

// console.log(obj2);
// obj1.name = 'Lucas';
// console.log(obj2);

// // Objeto Date
// const date = new Date();
// console.log(date.getFullYear());

// // Expresion regular

// const newReg = new RegExp('^[^@]+@[^@]+\.[a-zA-Z]{2,}$');

// const newReg2 = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;



// // try catch

// try {
//   if (newReg2.test('alejandrogmail.org')) {
//     alert('Email Valido');
//   } else {
//     throw new Error('Ups, email invalido');
//   };
// } catch (err) {
//   console.error(err.message);
//   alert(err.message);
// };

// alert('despues del try catch');

// Clases es6

/*2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
*/

class Cuenta {
  constructor() {
    this.titular = 'Alex';
    this.saldo = 0;
  }
  ingresar(pesos) {
    const valorIngresado = parseFloat(pesos);
    try {
      if (!isNaN(valorIngresado)) {
        this.saldo = this.saldo + valorIngresado;
      } else {
        throw new Error('Tipo de dato invalido');
      }
    } catch (error) {
      console.error(error.message);
      alert('Solo puedes ingresar numeros');
    }
  }
  extraer(pesos) {
    const valorIngresado = parseFloat(pesos);
    try {
      if (!isNaN(valorIngresado)) {
        if (valorIngresado <= this.saldo) {
          this.saldo = this.saldo - valorIngresado;
        } else {
          throw new Error('Saldo insuficiente');
        }
      } else {
        throw new Error('Tipo de dato invalido');
      }
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  }
  informeDeCuenta() {
    alert(`El usuario ${this.titular} tiene disponible: $${this.saldo}`)
  }
};

const usuarioBanco = new Cuenta();