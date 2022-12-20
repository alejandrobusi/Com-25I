// console.log(document.body.innerHTML = '<h2> Hola Mundo </h2>');
// console.log(document.body.innerText = '<h2> Hola Mundo </h2>');
// console.log(document.getElementById('title'));
// console.log(document.getElementsByClassName('subtitle'));
// console.log(document.querySelector('#sub2'));

let myDiv = document.createElement('div');

myDiv.innerHTML = '<h3>Soy el h3 que esta en el div</h3>';
myDiv.className = 'myDiv';

document.getElementById('theSectionTag').appendChild(myDiv);


let mySection = document.getElementById('theSectionTag');

document.body.appendChild(mySection.cloneNode(true));

const clickButton = (x) => {
  alert(`Hola ${x}, te voy a cambiar de pagina`);
  window.location.replace('https://google.com.ar');
};

const readinput = () => {
  const userName = document.getElementById('InputUserName').value;
  const selectOptions = document.getElementById('SelectOptions').value;
  const dataForm = {userName, selectOptions};
  if (dataForm.userName == '') {
    alert('El nombre de usuario es obligatorio');
  }
};