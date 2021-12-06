import React from 'react';
import AlbumProvider from './context/AlbumProvider';
import './App.css';
import Album from './pages/Album';

function App() {
  return (
    <div>
      <AlbumProvider>
        <Album />
      </AlbumProvider>
    </div>
  );
}

export default App;
