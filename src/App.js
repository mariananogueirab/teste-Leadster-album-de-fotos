import React from 'react';
import AlbumProvider from './context/AlbumProvider';
import './App.css';
import Album from './pages/Album';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <AlbumProvider>
        <Header />
        <Album />
        <Footer />
      </AlbumProvider>
    </div>
  );
}

export default App;
