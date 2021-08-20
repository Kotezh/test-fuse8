import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './CardList.css';

export default function CardList({ cards }) {
  const [searchedCards, setSearchedCards] = useState([]);
  const [search, setSearch] = useState('');
  const [isNoData, setIsNoData] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect((event) => {
    if (search && (event.target.value.length >= 3)) {
      setSearchedCards(
        cards.filter((m) =>
          m.title?.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [cards, search]);

  useEffect(() => {
    if (!searchedCards.length && search) {
      setIsNoData(true);
    } else {
      setIsNoData(false);
    }
  }, [searchedCards, search]);

  function handleSearchSubmit() {}

  function handleSearchChange(event) {
    event.preventDefault();
    setSearchValue(event.target.value);
    if(event.target.value.length >= 3) {

    setSearch(searchedCards)
    }   }

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
            value={searchValue}
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
          cards.map((card) => <Card key={card.id} card={card} />)
        )}
      </div>
      <button
        // onClick={handleClickMore}
        className='cards__btn-more'
      >
        See more
      </button>
    </section>
  );
}
