import React, { useContext } from 'react';
import { BiSad } from 'react-icons/bi';
import AlbumContext from '../context/AlbumContext';

const CollectionNotFound = function CollectionFunc() {
  // para quando o texto digitado na search bar não encontrar uma combinação
  const { width } = useContext(AlbumContext);

  return (
    <div className="not-found">
      Desculpe, não encontramos uma coleção com esse nome
      <BiSad size={width >= 320 ? '50px' : '10px'} />
    </div>
  );
};

export default CollectionNotFound;
