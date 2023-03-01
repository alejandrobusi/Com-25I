import React, { useState } from 'react';

const Contador = () => {
  const [ count, setCount ] = useState(0)
  const [name, setName] = useState();

  console.log('Soy el contador comp');
  return (
    <div>
      <h1>Contador: {count}</h1>
      <h1>Nombre: {name}</h1>
      <button className='btn btn-danger' onClick={() => {
        setCount(count + 1);
      }}>incrementar</button>
      <button className='btn btn-success mx-2' onClick={() => {
        setCount(0);
      }}>reiniciar</button>
      <input type="text" onChange={(e) => {
        setName(e.target.value);
      }}/>
    </div>
  )
}

export default Contador;
