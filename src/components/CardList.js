import React from 'react';
import Card from './Card';
import './CardList.css';
import cards from '../data';

const CardList = () => {
	return (
		<>
			{cards.map((card) => (
				<Card card={card} />
			))}
		</>
	);
};

export default CardList;
