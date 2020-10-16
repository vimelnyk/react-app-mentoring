import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import useToggle from '../../utilities/useToggle';
import FilterNames from '../../constants/filter-names';
import Popup from '../popup';
import './edit-popup-intro.scss';
import { createFilm, editFilm } from '../../actions/filmActions';

function EditPopupIntro({ createFilm, editFilm, managedFilm }) {
  const [toggle, setToggle] = useToggle(false);
  const [title, setTitle] = useState(managedFilm.title || '');
  const [posterPath, setPosterPath] = useState(managedFilm.poster_path || '');
  const [releaseDate, setReleaseDate] = useState(managedFilm.release_date || '');
  const [runtime, setRuntime] = useState(managedFilm.runtime || 0);
  const [genres, setGenres] = useState(managedFilm.genres || []);
  const [overview, setOverview] = useState(managedFilm.overview || '');

  const onCheckboxChange = (e) => {
    const gr = genres;
    const el = e.target.value;
    if (gr.includes(el)) {
      const needed = gr.filter((genre) => genre !== el);
      return setGenres(needed);
    }
    gr.push(el);
    return setGenres(gr);
  };

  const onReset = () => {
    setTitle(managedFilm.title || '');
    setPosterPath(managedFilm.poster_path || '');
    setReleaseDate(managedFilm.release_date || '');
    setRuntime(managedFilm.runtime || 0);
    setGenres(managedFilm.genres || []);
    setOverview(managedFilm.overview || '');
  };

  const film = {
    title,
    poster_path: posterPath,
    release_date: releaseDate,
    overview,
    runtime,
    genres,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (managedFilm.id) {
      const filmToEdit = {
        ...film, id: managedFilm.id,
      };
      editFilm(managedFilm.id, filmToEdit);
    } else {
      createFilm(film);
    }
  };

  const manageFilmId = (id) => (
    <div className="form-control">
      <label htmlFor="title" className="form-control__label">
        Movie id
      </label>
      <input
        id="id"
        type="text"
        name="id"
        className="form-control__input"
        value={id}
        readOnly
      />
    </div>
  );

  return (
    <Popup>
      <form onSubmit={(e) => onSubmit(e)}>
        <h2 className="heading mb-4">
          {managedFilm.id ? 'Edit' : 'Add'}
          {' '}
          Movie
        </h2>
        {managedFilm.id && manageFilmId(managedFilm.id)}
        <div className="form-control">
          <label htmlFor="title" className="form-control__label">
            Title
          </label>
          <input
            id="title"
            type="text"
            name="title"
            placeholder="Enter title"
            className="form-control__input"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="date" className="form-control__label">
            Release Date
          </label>
          <div className="custom-date">
            <input
              id="date"
              type="date"
              name="releaseDate"
              placeholder="Select Date"
              className="custom-date__input"
              onChange={(e) => setReleaseDate(e.target.value)}
              value={releaseDate}
              required
            />
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path
                fill="#f65261"
                d="M10 12h4v4h-4zM16 12h4v4h-4zM22 12h4v4h-4zM4 24h4v4h-4zM10 24h4v4h-4zM16 24h4v4h-4zM10 18h4v4h-4zM16 18h4v4h-4zM22 18h4v4h-4zM4 18h4v4h-4zM26 0v2h-4v-2h-14v2h-4v-2h-4v32h30v-32h-4zM28 30h-26v-22h26v22z"
              />
            </svg>
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="posterPath" className="form-control__label">
            Movie Url
          </label>
          <input
            id="posterPath"
            type="text"
            name="posterPath"
            placeholder="Enter Movie Url"
            className="form-control__input"
            onChange={(e) => setPosterPath(e.target.value)}
            value={posterPath}
            required
          />
        </div>
        <fieldset className="form-control custom-select">
          <legend className="custom-select__label form-control__label">
            Genre
          </legend>
          <button
            className="custom-select__button"
            type="button"
            onClick={setToggle}
          >
            {genres.join(', ') || 'Select'}
          </button>
          <div
            className={`custom-select__dropdown ${toggle ? 'active' : null}`}
          >
            {FilterNames.slice(1).map((name) => (
              <label className="custom-select__checkbox" key={name.id}>
                <input
                  name="genres"
                  type="checkbox"
                  className="custom-select__input"
                  onChange={(e) => onCheckboxChange(e)}
                  value={name.name}

                />
                <i className="custom-select__icon" />
                {name.name}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="form-control">
          <label htmlFor="overview" className="form-control__label">
            Overview
          </label>
          <textarea
            id="overview"
            name="overview"
            placeholder="Overview"
            className="form-control__input"
            onChange={(e) => setOverview(e.target.value)}
            value={overview}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="runtime" className="form-control__label">
            Runtime
          </label>
          <input
            id="runtime"
            type="text"
            name="runtime"
            placeholder="Runtime"
            className="form-control__input"
            onChange={(e) => setRuntime(Number(e.target.value))}
            value={runtime}
            required
          />
        </div>
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="bttn bttn--invert mr-2"
            onClick={() => onReset()}
          >
            Reset
          </button>
          <button type="submit" className="bttn bttn--general">
            Submit
          </button>
        </div>
      </form>
    </Popup>
  );
}

const mapStateToProps = (state) => ({
  managedFilm: state.films.managedItem,
});

export default connect(mapStateToProps, { createFilm, editFilm })(EditPopupIntro);

EditPopupIntro.propTypes = {
  createFilm: PropTypes.func.isRequired,
  managedFilm: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    runtime: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
  }),
};
EditPopupIntro.defaultProps = {
  managedFilm: {
    id: '',
    title: '',
    poster_path: '',
    release_date: '',
    runtime: 0,
    overview: '',
    genres: [],
  },
};
