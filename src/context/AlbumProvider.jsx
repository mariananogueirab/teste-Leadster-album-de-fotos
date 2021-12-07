import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AlbumContext from './AlbumContext';
import PropTypes from 'prop-types';

function AlbumProvider({ children }) {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [width, setWidth] = useState(0)
  const [searchText, getSearchText] = useState('nature')
  const API_PHOTOS = `https://api.pexels.com/v1/search?query=${searchText}&per_page=10`;
  const API_KEY = '563492ad6f9170000100000154ad4ac4ee4346c385b7fff974a8a2b6';

  useEffect(() => {
    async function fetchAlbum() {
      await axios.get(API_PHOTOS, { // autenticação necessária
        headers: {
          Authorization: `${API_KEY}`,
        },
      })
        .then((data) => (
          setPhotos(data.data.photos) // envia as fotos para o estado global
        ));
      setLoading(false);
    }
    fetchAlbum();
    const largura = window.innerWidth;
    setWidth(largura);
  }, [API_PHOTOS]);

  const contextValue = {
    photos,
    loading,
    width,
    getSearchText
  };

  return (
    <AlbumContext.Provider value={ contextValue }>
      {children}
    </AlbumContext.Provider>
  )
}

AlbumProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AlbumProvider;
