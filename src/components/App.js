import React from 'react';
import './App.css';
import Confetti from 'react-confetti';
import 'rodal/lib/rodal.css';
import CardList from './CardList';

class App extends React.Component {
	render() {
		return (
			<div className='App'>
				<Confetti recycle={false} numberOfPieces={400}/>
				<h1>Happy Birthday Sarah!</h1>
				<div className='card-list'>
					<CardList />
				</div>
				<h1>Love, your family</h1>
			</div>
		);
	}
}

export default App;
