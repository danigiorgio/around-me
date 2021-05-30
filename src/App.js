import './styles/main.css';

import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import Swal from 'sweetalert2';

import BusinessList from './components/BusinessList/BusinessList';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './services/api';

export default function App() {
  const [businesses, setBusinesses] = useState([]);
  const [sortedBusinesses, setSortedBusiness] = useState([]);
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sort, setSort] = useState('best_match');
  const [isLoading, setIsLoading] = useState(false);

  const sortCategories = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'reviewCount',
  };

  function handleSortChange(sortCategory) {
    setSort(sortCategory);
  }

  function handleTermChange(e) {
    setTerm(e.target.value);
  }

  function handleLocationChange(e) {
    setLocation(e.target.value);
  }

  const getSortClass = (sortCategory) =>
    sort === sortCategory ? 'active' : '';

  function renderSortOptions() {
    return Object.keys(sortCategories).map((sortCategory) => {
      const sortValue = sortCategories[sortCategory];
      return (
        <li
          onClick={() => handleSortChange(sortValue)}
          key={sortValue}
          className={getSortClass(sortValue)}
        >
          {sortCategory}
        </li>
      );
    });
  }

  function searchYelp(term, location) {
    Yelp.search(term, location).then((businesses) => {
      setBusinesses([]);

      if (!businesses) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'No results found.',
          showConfirmButton: true,
          timer: 2000,
        });
      } else {
        setBusinesses([...businesses]);
      }
    });
  }

  function handleSearch() {
    searchYelp(term, location);
  }

  useEffect(() => {
    const sorted = businesses.map((a) => ({ ...a }));
    sorted.sort((a, b) => (a[sort] > b[sort] ? -1 : 1));
    setSortedBusiness(sorted);
  }, [businesses, sort]);

  useEffect(() => {
    if (businesses) {
      setIsLoading(false);
    }
  }, [businesses, setIsLoading]);

  return (
    <div className="container">
      <Header />
      <SearchBar
        renderSortOptions={renderSortOptions}
        handleSearch={handleSearch}
        handleTermChange={handleTermChange}
        handleLocationChange={handleLocationChange}
        setIsLoading={setIsLoading}
      />
      {isLoading ? (
        <div className="loader-icon">
          <ReactLoading
            type={'spin'}
            height={'65px'}
            width={'65px'}
            color={'#bfd4b6'}
          />
        </div>
      ) : (
        <BusinessList
          businesses={businesses}
          sortedBusinesses={sortedBusinesses}
          sort={sort}
        />
      )}
    </div>
  );
}
