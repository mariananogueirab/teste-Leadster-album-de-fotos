import React, { useContext } from 'react';
import AlbumContext from '../context/AlbumContext';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import '../../node_modules/react-lazy-load-image-component/src/effects/blur.css';
import '../styles/album.css';
import Spinning from '../components/Spinning';
import CollectionNotFound from '../components/CollectionNotFound';


function Album() {
  const { photos, loading, width, searchText } = useContext(AlbumContext);

  return (
    <div className="album">
      {searchText.lengt > 0 && photos.length === 0 && <CollectionNotFound/>}
      {loading ? <Spinning/> : photos.map((photo, { scrollPosition }) => (
        <div className="photo">
          <LazyLoadImage
            effect="blur"
            src={photo.src.medium}
            alt={photo.photographer}
            key={photo.id}
            height={width >= 320 ? "400px" : "250px"} // teve que ser tamanho físico por conta do lazyLoadImage
            width={width >= 320 ? "300px" : "150px"}
            scrollPosition={scrollPosition}
            className="photos-album"
          />
        </div>
      ))}
    </div>
  )
}

export default Album;