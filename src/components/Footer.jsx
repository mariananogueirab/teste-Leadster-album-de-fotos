import React, { useContext } from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import AlbumContext from '../context/AlbumContext';

const Footer = function FooterFunc() {
  const { width } = useContext(AlbumContext);

  return (
    <footer>
      <div>
        <h4 className="author">Mariana Nogueira Brum Pandeló</h4>
        <div className="nav">
          <a
            href="https://www.linkedin.com/in/mariananogueirabrum/"
            className="links"
          >
            <BsLinkedin size={width >= 320 ? '30px' : '10px'} />
          </a>
          <a href="https://github.com/mariananogueirab" className="links">
            <BsGithub size={width >= 320 ? '30px' : '10px'} />
          </a>
        </div>
      </div>
      <a href="https://www.pexels.com">
        <img
          src="https://images.pexels.com/lib/api/pexels-white.png"
          alt="logo pexels"
          className="logo-pexels"
        />
      </a>
    </footer>
  );
};
// coloquei a logo da pexels porquê eles pedem na documentação.

export default Footer;
