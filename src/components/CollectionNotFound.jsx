import React from 'react';
import { BiSad } from "react-icons/bi";
import '../styles/album.css';

function CollectionNotFound() {
  return (
    <div className="not-found">
      Desculpe, não encontramos uma coleção com esse nome
      <BiSad />
    </div>
  );
};

export default CollectionNotFound;