import React from 'react';
import styles from './card.module.css';

const Card = (props) => {
  const { img, name, lastName } = props.cardData;
  const { mostrarNombre } = props;
  return (
    <div className={`card ${styles.ancho}`}>
      <img src={img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{lastName}</p>
        <button className='btn btn-success' onClick={() => mostrarNombre(name)}>test</button>
      </div>
    </div>
  )
};

export default Card;