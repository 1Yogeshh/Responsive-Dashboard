import React from 'react';

const SearchBar = ({ handleSearchChange }) => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search by title" onChange={(e) => handleSearchChange(e.target.value)} />
    </div>
  );
};

export default SearchBar;
