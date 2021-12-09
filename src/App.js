import React from 'react';
import AlbumProvider from './context/AlbumProvider';
import Album from './pages/Album';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import './styles/album.css';

function App() {
  return (
    <div>
      <AlbumProvider>
        <Header />
        <SearchBar />
        <Album />
        <Footer />
      </AlbumProvider>
    </div>
  );
};

export default App;
