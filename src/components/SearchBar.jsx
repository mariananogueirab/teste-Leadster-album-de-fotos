import React, { useContext } from 'react';
import { BsSearch } from 'react-icons/bs';
import AlbumContext from '../context/AlbumContext';

const SearchBar = function SearchFunc() {
  const { width, fetchAlbum } = useContext(AlbumContext);

  return (
    <div className="search-bar">
      <input
        type="text"
        name="searchText"
        placeholder="Busque um tema e tecle enter"
        title="Tecle Enter para buscar!"
        onKeyPress={(e) => e.key === 'Enter' && fetchAlbum(e.target.value)}
        className="input-search"
      />
      <BsSearch size={width >= 320 ? '40px' : '20px'} />
    </div>
  );
};

export default SearchBar;
