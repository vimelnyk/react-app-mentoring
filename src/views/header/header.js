import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddFilm from '../add-film';
import SearchBackBtn from '../search-back-btn';
import Logo from '../logo';
import './header.scss';

const Header = ({ filmItem }) => (
  <header className="header">
    <div className="container">
      <div className="row ">
        <div className="col d-flex  justify-content-between align-items-center">
          <Logo />
          {JSON.stringify(filmItem) === '{}' && (
            <AddFilm label="Add Movie" />
          )}
          {JSON.stringify(filmItem) !== '{}' && (
            <SearchBackBtn
              label="Find Your Movie"
            />
          )}
        </div>
      </div>
    </div>
  </header>
);

const mapStateToProps = (state) => ({
  filmItem: state.films.currentItem,
});
export default connect(mapStateToProps)(Header);

Header.propTypes = {
  filmItem: PropTypes.shape({ root: PropTypes.string }.isRequired),
};
