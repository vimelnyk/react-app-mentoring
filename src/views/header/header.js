import React from 'react';
import AddFilm from '../add-film';
import './header.scss';

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="row  justify-content-between align-items-center">
        <span className="header__logo">Logo</span>
        <AddFilm label="Add Movie" />
      </div>
    </div>
  </header>
);

export default Header;
