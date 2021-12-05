import React from 'react';
import AlbumProvider from './context/AlbumProvider';
import './App.css';

function App() {
  return (
    <div>
      <AlbumProvider>
        Olá
      </AlbumProvider>
    </div>
  );
}

export default App;
