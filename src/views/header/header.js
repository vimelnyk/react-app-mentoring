import React from 'react';
import PropTypes from 'prop-types';
import AddFilm from '../add-film';
import Logo from '../logo';
import './header.scss';

const Header = ({ openPopup }) => (
  <header className="header">
    <div className="container">
      <div className="row ">
        <div className="col d-flex  justify-content-between align-items-center">
          <Logo />
          <AddFilm label="Add Movie" openPopup={openPopup} />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
Header.propTypes = {
  openPopup: PropTypes.func.isRequired,
};
