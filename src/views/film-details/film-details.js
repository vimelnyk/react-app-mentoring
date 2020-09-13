import React from 'react';
import PropTypes from 'prop-types';
import './film-details.scss';

const FilmDetails = ({ item }) => (
  <div className="row">
    <div className="col col-xl-3">
      <figure className="film-figure">
        <img src={item.url} alt={item.title} className="film-figure__img" />
      </figure>
    </div>
    <div className="col col-xl-9">
      <div className="film-details">
        <div className="film-details__head mb-2">
          <h1 className="film-details__title mr-3">{item.title}</h1>
          <i className="film-details__rating">{item.rating}</i>
        </div>
        <h2 className="film-details__subtitle mb-3">{item.description}</h2>
        <div className="film-details__params params mb-3">
          <span className="params__item mr-4">{item.year}</span>
          <span className="params__item">
            {item.duration}
            {' '}
            min
          </span>
        </div>
        <div className="film-details__body" />
        {item.overview}
      </div>
    </div>
  </div>
);

export default FilmDetails;

FilmDetails.defaultProps = {
  item: {
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

FilmDetails.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }),
};
