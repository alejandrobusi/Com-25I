import React, { useState, memo, useEffect } from 'react';

const Contador2 = memo(() => {

  return (
    <div>
      <h1>Contador 2</h1>
    </div>
  )
});

const Contador = ({data}) => {
  const [ count, setCount ] = useState(0);

  useEffect(() => {
    console.log('Se ejecuto el useEffect');
  }, [count, data]);
  

  return (
    <div>
      <h1>Contador useState: {count}</h1>
      <button onClick={() => {
        setCount(count + 1);
      }}>Aumentar useState</button>
      <button onClick={() => {
        setCount(0);
      }}>Reset contador</button>
      <Contador2 />
    </div>
  )
};

export default Contador;
