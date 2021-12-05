import React from 'react';
import AlbumContext from './AlbumContext';

function AlbumProvider({ children }) {
  let contextValue = {}
  return (
    <AlbumContext.Provider value={ contextValue }>
      {children}
    </AlbumContext.Provider>
  )
}

export default AlbumProvider;
