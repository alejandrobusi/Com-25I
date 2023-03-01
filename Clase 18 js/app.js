
import { sales } from './facturas.js';

const facTypeC = 'c';
const facTypeA = 'a';

sales.map((sale) => {
  if (sale.type === facTypeC) {
    console.log(`el nombre es ${sale.name}`)
  }
});

console.log(sales.find((sale) => sale.type === facTypeA));

console.log(sales.filter((sale) => sale.type === facTypeA));

const nombres = ['Ale', 'Ivan', 'Alvarito'];
const [nombre1, nombre2, nombre3] = nombres;

console.log({nombre2, nombre1})

const persona = {
  name: 'jose',
  age: 25,
  dni: 15535,
  test: {type: {class: 'B'}}
};

const {name, age, } = persona;
console.log(persona.test.type.class);

const state = false;

if (state) {
  console.log('El estado es true');
} else {
  console.log('El estado es false');
}

state ? console.log('El estado es true') : console.log('El estado es false');
state && console.log('El estado es true');


const funcAsync = async () => {
  let post0; 
  await fetch('https://jsonplaceholder.typicode.com/posts')
  .then((resp) => resp.json())
  .then(resp => post0 = resp[0])
  return post0;
}

funcAsync().then((resp) => console.log(resp));

const funcAsync2 = async () => {
  const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await resp.json();
  return data;
}

funcAsync2().then(resp => console.log(resp))
