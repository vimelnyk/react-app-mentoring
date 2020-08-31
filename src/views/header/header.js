import React from 'react';
import AddFilm from '../add-film';
import Logo from '../logo';
import './header.scss';

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="row ">
        <div className="col d-flex  justify-content-between align-items-center">
          <Logo />
          <AddFilm label="Add Movie" />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
