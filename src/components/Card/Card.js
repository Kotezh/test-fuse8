import React from 'react';
import './Card.css';

export default function Card({ card }) {
  const cardLabelClassName = `card__label 
    ${
      card.type === 'IndependentLiving'
        ? 'card__label_type_independent-living'
        : 'card__label_type_support-available'
    }`;
    
  const price =
    card.price.length <= 3
      ? card.price
      : (card.price + '')
          .split('')
          .reverse()
          .map((c, i) => {
            return (i + 1) % 3 === 0 ? ',' + c : c;
          })
          .reverse()
          .join('')
          .replace(/^,/, '')

  return (
    <a
      className='card'
      href={`/details/${card.id}`}
      target='_blank'
      rel='noreferrer'
    >
      <figure className='card__figure'>
        <div className='card__figure-wrapper'>
        <img
          className='card__image'
          src='https://via.placeholder.com/300x181/c6f7c9/FFFFFF?text=image'
          alt={card.title}
        />
        <span className={cardLabelClassName}>
          {card.type === 'IndependentLiving'
            ? 'Independent living'
            : 'Restaurant & Support available'}
        </span>
        </div>
        <figcaption className='card__caption'>
          <h2 className='card__title'>{card.title}</h2>
          <p className='card__address'>{card.address}</p>
          <p className='card__price'>
            New Properties for Sale from{' '}
            <span className='card__price_bold'>&#163;{price}</span>
          </p>
          <p className='card__share-condition'>Shared Ownership Available</p>
        </figcaption>
      </figure>
    </a>
  );
}
