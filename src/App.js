import React from 'react';
import './App.css';

import CardList from './components/CardList';

function App() {
  return (
    <div className="App">
      <h1>Happy Birthday Sarah!</h1>
      <CardList />
      <button>Write a card</button>
    </div>
  );
}

export default App;
