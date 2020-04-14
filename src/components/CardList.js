import React from 'react';
import Card from './Card';

import './CardList.css';
import FloatDoodle from '../images/FloatDoodle.svg'
import IceCreamDoodle from '../images/IceCreamDoodle.svg'
import PlantDoodle from '../images/PlantDoodle.svg'


const cards = [
  {
    name: 'lilly',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: FloatDoodle
  },
  {
    name: 'tina',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: IceCreamDoodle
  },
  {
    name: 'mom',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: PlantDoodle
  },
]

const CardList = () => {
  return (
    <div className='card-list'>
      {cards.map(card => (
        <Card card={card}/>
      ))}
    </div>
  );
}

export default CardList;
