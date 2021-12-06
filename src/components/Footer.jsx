import React from 'react';

function Footer() {
  return (
    <footer>
      <div>
        <h4 className="author">Mariana Nogueira Brum Pandeló</h4>
        <div className="nav">
          <a href="https://www.linkedin.com/in/mariananogueirabrum/" className="links">Linkedin</a>
          <a href="https://github.com/mariananogueirab" className="links">GitHub</a>
        </div>
      </div>
      <a href="https://www.pexels.com">
        <img src="https://images.pexels.com/lib/api/pexels-white.png" alt="logo pexels" className="logo-pexels"/>
      </a>
    </footer>
  )
}

export default Footer;
