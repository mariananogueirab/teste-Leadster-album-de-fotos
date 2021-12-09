import React, { useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import AlbumContext from '../context/AlbumContext';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Spinning from '../components/Spinning';
import CollectionNotFound from '../components/CollectionNotFound';
import PaginationComponent from '../components/PaginationComponent';

const Album = function AlbumFunc() {
  const { photos, loading, width } = useContext(AlbumContext);

  return (
    <main>
      {photos?.length === 0 && <CollectionNotFound />}
      <section className="album">
        {loading ? (
          <Spinning />
        ) : (
          photos.map((photo, { scrollPosition }) => (
            <div className="photo">
              <LazyLoadImage
                effect="blur"
                src={photo.src.medium}
                alt={photo.photographer}
                key={photo.id}
                height={width >= 320 ? '400px' : '300px'} // teve que ser tamanho fixo por conta do lazyLoadImage
                width={width >= 320 ? '300px' : '150px'}
                scrollPosition={scrollPosition}
                className="photos-album"
              />
            </div>
          ))
        )}
      </section>
      <PaginationComponent />
    </main>
  );
};

export default Album;
