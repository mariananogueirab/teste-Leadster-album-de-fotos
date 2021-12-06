import React from 'react';
import Logo from '../images/logo-leadster.png';
import '../styles/album.css';

const Header = function HeaderFunc() {
  return (
    <header>
      <h1 className="title-header">Teste Leadster - Álbum de fotos</h1>
      <img src={Logo} alt="Logo Leadster" className="logo-leadster" />
    </header>
  );
};

export default Header;
