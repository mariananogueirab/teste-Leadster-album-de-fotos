import React, { useContext } from "react";
import AlbumContext from "../context/AlbumContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Spinning from "../components/Spinning";
import CollectionNotFound from "../components/CollectionNotFound";
import PaginationComponent from "../components/PaginationComponent";

function Album() {
  const { photos, loading, width, searchText } = useContext(AlbumContext);

  return (
    // TIRAR O SEARCH TEXT
    <main>
      {searchText?.length > 0 && photos?.length === 0 && <CollectionNotFound />}
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
                height={width >= 320 ? "400px" : "300px"} // teve que ser tamanho fixo por conta do lazyLoadImage
                width={width >= 320 ? "300px" : "150px"}
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
}

export default Album;
