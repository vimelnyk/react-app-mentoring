import React from 'react';
import PropTypes from 'prop-types';
import convertYearView from '../../utilities/convertYearView';

import './film-details.scss';

const FilmDetails = ({ item }) => (
  <div className="row">
    <div className="col col-xl-3">
      <figure className="film-figure">
        <img
          src={item.poster_path}
          alt={item.title}
          className="film-figure__img"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/img/mock/image.jpg';
          }}
        />
      </figure>
    </div>
    <div className="col col-xl-9">
      <div className="film-details">
        <div className="film-details__head mb-2">
          <h1 className="film-details__title mr-3">{item.title}</h1>
          <i className="film-details__rating">{item.vote_average}</i>
        </div>
        <h2 className="film-details__subtitle mb-3">{item.tagline}</h2>
        <div className="film-details__params params mb-3">
          <span className="params__item mr-4">
            {convertYearView(item.release_date)}
          </span>
          <span className="params__item">
            {item.runtime}
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

FilmDetails.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
  }),
};
