import React from 'react';

const Search = ({ search, handleSearch }) => (
  <>
    <div id="search">
      <input
        type="text"
        name="inpSearch"
        id="inpSearch"
        placeholder="Search"
        onChange={handleSearch}
        value={search}
      />
    </div>
  </>
);

export default Search;
