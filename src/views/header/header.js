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
Header.defaultProps = {
  filmItem: {
    id: 1,
    title: 'Film1',
    tagline: 'Film1 description',
    poster_path: '../../img/mock/1.jpg',
    release_date: '2020',
    vote_average: 4.5,
    runtime: 200,
    overview:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
};
