import React from 'react';
import PropTypes from 'prop-types';
import AddFilm from '../add-film';
import SearchBackBtn from '../search-back-btn';
import Logo from '../logo';
import './header.scss';

const Header = ({ openPopup, currentItem, changeCurrentItem }) => (
  <header className="header">
    <div className="container">
      <div className="row ">
        <div className="col d-flex  justify-content-between align-items-center">
          <Logo />
          {!currentItem && <AddFilm label="Add Movie" openPopup={openPopup} />}
          {currentItem !== '' && (
            <SearchBackBtn
              label="Find Your Movie"
              changeCurrentItem={changeCurrentItem}
            />
          )}
        </div>
      </div>
    </div>
  </header>
);

export default Header;
Header.propTypes = {
  openPopup: PropTypes.func.isRequired,
  currentItem: PropTypes.string.isRequired,
  changeCurrentItem: PropTypes.func.isRequired,
};
