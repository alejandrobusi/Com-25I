// const auto = {
//   marca: 'Peugeot',
//   color: 'rojo',
//   modelo: () => {
//     console.log('2020');
//   }
// };

// function Auto(colorA, marcaA, modeloA, añoA) {
//   this.color = colorA;
//   this.marca = marcaA;
//   this.modelo = modeloA;
//   this.año = añoA;
//   this.mostrarModelo = () => {
//     alert(this.modelo);
//   }
// };

// const auto1 = new Auto('Negro', 'Fiat', 'Punto', 2021);
// const auto2 = new Auto('rojo', 'chevrolet', 'cruce', 2022);
// console.log(auto1, auto2);

// const persona = new Object();
// persona.nombre = 'ivan';
// console.log(persona);

// const persona1 = {name: 'jose'};
// const persona2 = persona1;

// console.log(persona1 === persona2);

// ========= CLASS ES6 ===========

class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }
  comer() {
    alert(`${this.nombre}, esta comiendo...`)
  }
};

const nuevaPersona = new Persona('Alvarito', 'Jotar', 24);
console.log(nuevaPersona);