class Rectangulo {
  constructor(alto = 0, ancho = 0){
    this.alto = alto;
    this.ancho = ancho;
  }
  set setearAlto(valor){
    this.alto = valor;
  }
  set setearAncho(valor){
    this.ancho =  valor;
  }
  get area(){
    return this.alto * this.ancho;
  }
}

const rectanguleitor = new Rectangulo();
rectanguleitor.setearAlto = 24;
rectanguleitor.setearAncho = 12;

// BOM
// http://127.0.0.1:5500/Clase%2012%20js/index.html
// console.log(window.navigator)
// console.log(window.location);
// window.alert('Esperame');
//window.location.href = 'https://www.google.com.ar';
// window.location.reload();
// window.location.replace('https://www.google.com.ar')
// console.log(window.history);
// window.history.back()
// window.history.go(-1)
// console.log(window.screen);
// console.log(window.frames);/

// if (window.location.protocol == 'http:') {
//   alert('Esta pagina no es segura')
//   window.location.replace('https://www.google.com.ar')
// } else {
//   window.location.reload()
// };

// Funciones del tiempo

// const reloarPage = () => {
//   location.reload()
// };

// const loop = setInterval(() => {
//   console.log('Estoy en un setInterval');
// }, 50);

// const stopLoop = () => {
//   clearInterval(loop);
//   console.log('El loop ha muerto');
// };

// setTimeout(() => {
//   stopLoop()
// }, 2000);

// DOM
console.log(document.body)
document.body.innerHTML = '<h1> Hola como estas </h1>';


