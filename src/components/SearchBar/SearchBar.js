import './SearchBar.css';

import React from 'react';

import { SubmitButton } from '../SubmitButton/SubmitButton';

export default function SearchBar({
  renderSortOptions,
  handleTermChange,
  handleLocationChange,
  handleSearch,
  setIsLoading,
}) {
  const onEnterPress = (e) =>
    e.which === 13 && (setIsLoading(true), handleSearch());

  return (
    <div className="searchbar">
      <div className="searchbar-sort-options">
        <ul>{renderSortOptions()}</ul>
      </div>
      <div className="searchbar-fields">
        <input
          onChange={handleTermChange}
          onKeyPress={onEnterPress}
          placeholder="Look for food, hotels..."
          autoFocus
        />
        <input
          onChange={handleLocationChange}
          onKeyPress={onEnterPress}
          placeholder="In what city?"
        />
      </div>
      <div className="searchbar-submit">
        <SubmitButton setIsLoading={setIsLoading} handleSearch={handleSearch} />
      </div>
    </div>
  );
}
