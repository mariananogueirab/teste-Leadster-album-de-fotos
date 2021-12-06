import React, { useContext } from 'react';
import AlbumContext from '../context/AlbumContext';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import '../../node_modules/react-lazy-load-image-component/src/effects/blur.css';
import '../styles/album.css';

function Album() {
  const { photos, loading } = useContext(AlbumContext);
  console.log(photos)

  return (
    <div className="album">
      {loading ? 'loading...' : photos.map((photo, { scrollPosition }) => (
        <div>
          <LazyLoadImage
            effect="blur"
            src={photo.src.medium}
            alt={photo.photographer}
            key={photo.id}
            height="400px"
            width="300px"
            scrollPosition={scrollPosition}
            className="photos-album"
          />
        </div>
      ))}
    </div>
  )
}

export default Album;