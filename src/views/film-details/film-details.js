import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {

  useParams,

} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSingleFilm } from '../../actions/filmActions';
import convertYearView from '../../utilities/convertYearView';

import './film-details.scss';

function FilmDetails({ fetchFilm, filmItem }) {
  const { id } = useParams();
  useEffect(() => {
    if (Number(id) !== filmItem.id) {
      fetchFilm(Number(id));
    }
  }, [id, filmItem]);

  return (
    <section className="intro intro--darken d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col col-xl-3">
            <figure className="film-figure">
              <img
                src={filmItem.poster_path}
                alt={filmItem.title}
                className="film-figure__img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/public/img/mock/image.jpg';
                }}
              />
            </figure>
          </div>
          <div className="col col-xl-9">
            <div className="film-details">
              <div className="film-details__head mb-2">
                <h1 className="film-details__title mr-3">{filmItem.title}</h1>
                <i className="film-details__rating">{filmItem.vote_average}</i>
              </div>
              <h2 className="film-details__subtitle mb-3">
                {filmItem.tagline}
              </h2>
              <div className="film-details__params params mb-3">
                <span className="params__item mr-4">
                  {convertYearView(filmItem.release_date)}
                </span>
                <span className="params__item">
                  {filmItem.runtime}
                  {' '}
                  min
                </span>
              </div>
              <div className="film-details__body" />
              {filmItem.overview}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
const mapStateToProps = (state) => ({
  filmItem: state.films.singleFilm,
});
export default connect(mapStateToProps, { fetchFilm: fetchSingleFilm })(FilmDetails);

FilmDetails.defaultProps = {
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

FilmDetails.propTypes = {
  filmItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number,
    runtime: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
  }),
  fetchFilm: PropTypes.func.isRequired,
};
