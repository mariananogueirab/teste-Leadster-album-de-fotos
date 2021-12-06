import React, { useContext } from 'react';
import AlbumContext from '../context/AlbumContext';

function Album() {
  const { photos, loading } = useContext(AlbumContext);

  return (
    <div>
      {loading ? 'loading...' : photos.map((photo, index) => (
        <img src={photo.src.portrait} alt={photo.photographer} />
      ))}
    </div>
  )
}

export default Album;