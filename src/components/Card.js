import React, {useState} from 'react';

import './Card.css';

const Card = ({card}) => {

  const [open, setOpen] = useState(false);

  const toggleCard = () => {
    setOpen(!open)
  }

  return (
    <div className='card-container'>
      <div
        className='card-preview'
        onClick={toggleCard}
      >
        <h1>from {card.name}</h1>
        <img src={card.image} alt='card-illustration' />
      </div>

      {open ?
      <div className='card-popup'>
        <h2>{card.message}</h2>
        <h4>from {card.name}</h4>
      </div> :
      null
      }
    </div>

  );
}

export default Card;
