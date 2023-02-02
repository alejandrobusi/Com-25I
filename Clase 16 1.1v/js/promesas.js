// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('Ha ocurrido un error');
//   }, 3000)
// })

// promesa.then((response) => {console.log(response)});
// promesa.catch((response) => console.error(response));

const motos = [
  {
    id: 1,
    marca: 'KTM'
  },
  {
    id: 2,
    marca: 'Honda'
  },
  {
    id: 3,
    marca: 'Motomel'
  },
  {
    id: 4,
    marca: 'Yamaha'
  },
];


const buscarMoto = (id) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = motos.find((moto) => moto.id == id)
        if (result) {
          resolve(result);
        } else {
          reject('No se ha encontrado el item');
        }
      }, 3000);
    })
} 

buscarMoto(5).then((response) => console.log(response));
buscarMoto(5).catch((response) => console.error(response));

