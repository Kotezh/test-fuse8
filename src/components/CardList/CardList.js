import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './CardList.css';

export default function CardList({ cards }) {
  const [searchedCards, setSearchedCards] = useState([]);
  const [search, setSearch] = useState('');
  const [isNoData, setIsNoData] = useState(false);

// useEffect(() => {
//   setSearchedCards(cards)
// }, [cards]);

  useEffect(() => {
    if (search.length >= 3) {
      setSearchedCards(
        cards.filter((m) =>
          m.title?.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setSearchedCards(cards)
    }
  }, [cards, search]);

  useEffect(() => {
    if (!searchedCards.length && search) {
      setIsNoData(true);
    } else {
      setIsNoData(false);
    }
  }, [searchedCards, search]);

  function handleSearchSubmit(event) {
    event.preventDefault();
  }

  function handleSearchChange(event) {

    setSearch(event.target.value);
  }

  return (
    <section className='cards'>
      <div className='cards__search'>
        <form className='search__form' onSubmit={handleSearchSubmit}>
          <label htmlFor='search' className='search__input-label'>
            Filter
          </label>
          <input
            id='search'
            type='text'
            name='search'
            value={search}
            onChange={handleSearchChange}
            minLength='3'
            maxLength='300'
            className='search__input'
            pattern='^.+$'
            // placeholder='Поиск'
            required
          />
        </form>
      </div>
      <div className='cards__list'>
        {isNoData ? (
          <span className='cards__no-data'>Ничего не найдено</span>
        ) : (
          searchedCards.map((card) => <Card key={card.id} card={card} />)
        )}
      </div>
      <button className='cards__btn-more'>See more</button>
    </section>
  );
}
