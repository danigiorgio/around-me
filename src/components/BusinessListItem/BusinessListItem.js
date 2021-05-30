import './BusinessListItem.css';

import React from 'react';
import { ImPhone, ImStarEmpty, ImStarFull } from 'react-icons/im';
import Rating from 'react-rating';

export default function Business({ business }) {
  const {
    address,
    category,
    city,
    display_phone,
    imageSrc,
    name,
    rating,
    reviewCount,
    url,
  } = business;

  return (
    <div key={business.id} className="business">
      <div className="image-container">
        <img src={imageSrc} alt={`shop: ${name}`} />
      </div>
      <h2>{name}</h2>
      <div className="business-information">
        <div className="business-address">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${address}+${city}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>{address}</p>
            <p>{city}</p>
            <p>
              <ImPhone /> {display_phone}
            </p>
          </a>
        </div>
        <div className="business-reviews">
          <h3>{category}</h3>
          <h3 className="rating">
            <Rating
              emptySymbol={<ImStarEmpty />}
              fullSymbol={<ImStarFull />}
              fractions={2}
              readonly
              initialRating={rating}
            />
          </h3>
          <p>{reviewCount} reviews</p>
        </div>
      </div>
      <p className="yelp-link">
        <a href={url} target="_blank" rel="noopener noreferrer">
          See on Yelp
        </a>
      </p>
    </div>
  );
}
