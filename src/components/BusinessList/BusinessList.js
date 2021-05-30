import './BusinessList.css';

import React from 'react';

import Business from '../BusinessListItem/BusinessListItem';

export default function BusinessList({
  businesses,
  sortedBusinesses,
  searchSort,
}) {
  return (
    <main className="business-list">
      {searchSort === 'best_match'
        ? businesses?.map((business) => {
            return <Business business={business} key={business.id} />;
          })
        : sortedBusinesses?.map((business) => {
            return <Business business={business} key={business.id} />;
          })}
    </main>
  );
}
