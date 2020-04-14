import React from 'react';

const Card = ({cards}) => {
  return (
    <div>
      {cards.map(card => (
        <div>
          <h2>{card.message}</h2>
          <h4>from {card.name}</h4>
        </div>
      ))}
    </div>
  );
}

export default Card;
