const auto = {
  marca: 'Peugeot',
  modelo: 306,
  puertas: () => {console.log('5');}
};

// auto.puertas()

// auto.combustible = 'gasoil';
// auto.puertas = 5;
// delete auto['puertas']
// console.log(auto);

// const keys = Object.keys(auto);

// for (let i = 0; i < keys.length; i++) {
//   console.log(auto[keys[i]])
// };

const products = [
  { id: 1, name: "Leche", price: 120, categories: ["familiar", "comida"] },
  { id: 2, name: "Arroz", price: 80, categories: ["familiar", "comida"] },
  { id: 3, name: "Lavadora", price: 7800, categories: ["electrodomésticos"] }
];

// products.map((prod) => {
//   console.group(prod.name)
//   console.log(`id: ${prod.id}`);
//   console.log(`price: $${prod.price}`);
//   console.log(`cat: ${prod.categories.join(", ")}`);
//   console.groupEnd()
// });

// for (var i=0; i < products.length; i++) {
//   var product = products[i];
//   console.group(product.name);
//   console.log("  Id: " + product.id);
//   console.log("  Precio: " + product.price);
//   console.log("  Categorías: " + product.categories.join(", "));
//   console.groupEnd()
// };

const auto2 = {
  color: 'rojo',
  marca: 'fiat',
  modelo: 'punto',
  año: 2020,
};
// Funcion constructora

const listCars = [];

function Auto(color, marca, modelo, año) {
  this.colorA = color;
  this.marcaA = marca;
  this.modeloA = modelo;
  this.añoA = año;
};
const autito = new Auto('negro', 'chevrolet', 'cruce', 2022);
listCars.push(autito);

// CONSTRUCTOR OBJECT 

const people = new Object();
people.name = 'Alvarito';
people.age = 25;
let autito2 = autito;
autito.añoA = 1993;
console.log(autito2)


// object.create()

const autito3 = Object.create(autito);
autito.marcaA = 'fiat';
autito3.marcaA = 'chevro'
console.log(autito3);

// Comparando objetos
// variable de referencia del objeto persona1
var persona1 = {nombre: "Juan"};

// variable de referencia del objeto persona2
var persona2 = persona1

console.log(persona1 == persona2) // retorna false
console.log(persona1 === persona2) // retorna false

console.log(Date())

// const ejercicio1 = () => {
//   let marca = 'Peugeot';
//   let color = 'Rojo';
//   let modelo = 306;

//   const car = {
//     marca: marca,
//     color: color,
//     modelo: modelo,
//     status: false,
//     onOff: () => {
//       let onOff = confirm('Vas a encender el auto?');
//       if (onOff) {
//         this.status = false
//       } else {
        
//       }
//     }
//   };
//   car.onOff();
//   console.log(car)
// }

function Auto(color, marca, modelo, año) {
  this.colorA = color;
  this.marcaA = marca;
  this.modeloA = modelo;
  this.añoA = año;
  this.status = false;
  this.onOff = () => {
    let onOff = confirm('encender o apagar');
    if (onOff) {
      this.status = true;
    } else {
      this.status = false;
    }
    alert(`Estado del Motor: ${this.status}`);
  }
};
const autoNuevo = new Auto('negro', 'chevrolet', 'cruce', 2022);