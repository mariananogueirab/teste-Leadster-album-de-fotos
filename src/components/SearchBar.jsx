import React, { useContext } from 'react';
import { BsSearch } from "react-icons/bs";
import AlbumContext from '../context/AlbumContext';

function SearchBar() {
  const { width, getSearchText } = useContext(AlbumContext);
  return (
    <div className="search-bar">
      <input
        type="text"
        name="searchText"
        placeholder="Busque um tema"
        onChange={ ({ target: { value } }) => getSearchText(value) }
        className="input-search"
      />
      <BsSearch size={width >= 320 ? "40px" : "20px"}/>
    </div>
  )
}

export default SearchBar;
