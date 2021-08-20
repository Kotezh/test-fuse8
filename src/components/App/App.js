import React, { useEffect, useState } from 'react';
import CardList from '../CardList/CardList';
import cardsApi from '../../utils/CardsApi';
import './App.css';

export default function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    cardsApi
      .getCards()
      .then((cardsLoaded) => {
        setCards(cardsLoaded);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='app'>
      <header className='header'>
        <h1 className='header__title'>Our Latest Developments</h1>
      </header>
      <CardList cards={cards} />
    </div>
  );
}
