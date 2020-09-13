import React from 'react';
import PropTypes from 'prop-types';
import Search from '../search';
import FilmDetails from '../film-details';
import './intro.scss';

const Intro = ({ currentItem, currentItemFull }) => (
  <section className="intro d-flex align-items-center">
    <div className="container">
      {!currentItem && (
      <Search
        label="Find Your Movie"
        placeholder="What do you want to watch?"
        buttonLabel="Search"
      />
      )}
      {currentItem !== '' && <FilmDetails item={currentItemFull} />}
    </div>
  </section>
);

export default Intro;

Intro.defaultProps = {
  currentItemFull: {
    title: 'Film1',
    description: 'Film1 description',
    url: '../../img/mock/1.jpg',
    year: '2020',
    rating: '4.5',
    duration: '200',
    overview:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    id: '1a',
  },
};

Intro.propTypes = {
  currentItem: PropTypes.string.isRequired,
  currentItemFull: PropTypes.shape({ root: PropTypes.string }.isRequired),
};
