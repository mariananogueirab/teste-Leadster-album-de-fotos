import React, { useContext } from 'react';
import AlbumContext from '../context/AlbumContext';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import '../../node_modules/react-lazy-load-image-component/src/effects/blur.css';
import '../styles/album.css';
import Spinning from '../components/Spinning';


function Album() {
  const { photos, loading, width } = useContext(AlbumContext);
  console.log(width)

  return (
    <div className="album">
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