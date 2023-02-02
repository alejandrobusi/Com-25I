const calculadora = () => {
  const n1 = parseFloat(document.getElementById('n1').value);
  const n2 = parseFloat(document.getElementById('n2').value);
  const op = document.getElementById('operador').value;
  let resultado;

  if (op === '+') {
    resultado = n1 + n2;
  } else if (op === '-') {
    resultado = n1 - n2;
  } else if (op === '*') {
    resultado = n1 * n2;
  } else if (op == '/') {
    resultado = n1 / n2;
  } else {
    const res = document.getElementById('resultado');
    res.className = 'text-danger mt-2';
    res.innerHTML = 'No se ha seleccionado la operación';
    return;
  }
  const res = document.getElementById('resultado')
  res.classList.remove('text-danger');
  res.innerHTML = `Resultado: ${resultado}`;
};

// Modelo Avanzado

let op;

const opResult = (newOp) => {
  op = newOp
};

document.getElementById('+').addEventListener('click', ()  => opResult('+'));
document.getElementById('-').addEventListener('click', ()  => opResult('-'));
document.getElementById('*').addEventListener('click', ()  => opResult('*'));
document.getElementById('/').addEventListener('click', ()  => opResult('/'));

const calcular2 = () => {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  let resultado;

  if (op === '+') {
    resultado = num1 + num2;
  } else if (op === '-') {
    resultado = num1 - num2;
  } else if (op === '*') {
    resultado = num1 * num2;
  } else if (op == '/') {
    resultado = num1 / num2;
  } else {
    const res = document.getElementById('resultado2');
    res.className = 'text-danger mt-2';
    res.innerHTML = 'No se ha seleccionado la operación';
    return;
  }
  const res = document.getElementById('resultado2')
  res.classList.remove('text-danger');
  res.innerHTML = `Resultado: ${resultado}`;
  // removiendo el evento luego de 10 segundos
  setTimeout(() => {
    document.getElementById('calcular').removeEventListener('click', calcular2);
    console.log('Stop');
  },10000)
};

document.getElementById('calcular').addEventListener('click', calcular2);

/// JSON 
const userJson = JSON.stringify({
  name: 'Ale',
  lastName: 'Busi'
});

// console.log(userJson)
let userNoJson = JSON.parse(userJson)
// console.log(userNoJson);

// LocalStorage
// escribir en el localStorage
const name = 'Ale';
if (localStorage) {
  localStorage.setItem('Persona', name);
  localStorage.setItem('Persona2', 'Ivan');
  localStorage.setItem('Persona3', userJson);
} else {
  console.log('no local!!!');
}
// obtener LocalStorage
console.log(JSON.parse(localStorage.getItem('Persona3')));
// vaciar localStorage
// localStorage.clear()

// eliminar una key especifica

localStorage.removeItem('Persona');

// obtener el largo de localStorage (keys)

console.log(localStorage.length);