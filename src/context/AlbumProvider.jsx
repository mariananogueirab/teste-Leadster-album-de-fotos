import React, {
  useState, useEffect, useCallback, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import AlbumContext from './AlbumContext';
import { fetchPhotosAlbum } from '../services';

const AlbumProvider = function ProviderFunc({ children }) {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [width, setWidth] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const fetchAlbum = useCallback(
    async (searchTextParam) => {
      const data = await fetchPhotosAlbum({
        page: currentPage,
        query: searchTextParam || 'nature',
      });
      setPhotos(data.data.photos);
      setTotalResults(data.data.total_results);
      setLoading(false);
    }, [currentPage]);

  useEffect(() => {
    fetchAlbum();
    const largura = window.innerWidth;
    setWidth(largura);
  }, [fetchAlbum]);

  const contextValue = useMemo(
    () => ({
      photos,
      loading,
      width,
      setCurrentPage,
      currentPage,
      totalResults,
      fetchAlbum,
    }),
    [
      photos,
      loading,
      width,
      setCurrentPage,
      currentPage,
      totalResults,
      fetchAlbum,
    ],
  );

  return (
    <AlbumContext.Provider value={contextValue}>
      {children}
    </AlbumContext.Provider>
  );
};

AlbumProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AlbumProvider;
