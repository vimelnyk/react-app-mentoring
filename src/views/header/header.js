import React from 'react';
import PropTypes from 'prop-types';
import './header.scss';

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="row  justify-content-between align-items-center">
        <span className="header__logo">Logo</span>
        <button type="button" className="header__button">
          + Add Mowie
        </button>
      </div>
    </div>
  </header>
);
// Header.propTypes = {
//   label: PropTypes.string.isRequired,
// };

export default Header;
