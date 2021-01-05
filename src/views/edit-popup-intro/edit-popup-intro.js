import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  useFormik,
} from 'formik';
import * as Yup from 'yup';
import useToggle from '../../utilities/useToggle';
import FilterNames from '../../constants/filter-names';
import Popup from '../popup';
import './edit-popup-intro.scss';
import { createFilm, editFilm } from '../../actions/filmActions';

function EditPopupIntro({ createNewFilm, editThisFilm, managedFilm }) {
  const [toggle, setToggle] = useToggle(false);
  const formik = useFormik({
    initialValues: {
      title: managedFilm.title || '',
      tagline: managedFilm.tagline || '',
      overview: managedFilm.overview || '',
      release_date: managedFilm.release_date || '',
      poster_path: managedFilm.poster_path || '',
      runtime: managedFilm.runtime || 0,
      genres: managedFilm.genres || [],
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Required'),
      tagline: Yup.string()
        .max(20, 'Tagline must be no longer then 20 symbols')
        .required('Required'),
      overview: Yup.string()
        .min(20, 'Overview must be no shorter then 20 symbols')
        .required('Required'),
      release_date: Yup.string().required('Required'),
      poster_path: Yup.string().url('Url must be valid').required('Required'),
      runtime: Yup.number()
        .positive('Runtime must be positive')
        .integer('Runtime must be integer')
        .required('Required'),
      genres: Yup.array().min(1, 'Genre field must have at least 1 item'),
    }),
    onSubmit: (values) => {
      const film = {
        title: values.title,
        tagline: values.tagline,
        overview: values.overview,
        release_date: values.release_date,
        poster_path: values.poster_path,
        runtime: values.runtime,
        genres: values.genres,
      };
      if (managedFilm.id) {
        const filmToEdit = {
          ...film,
          id: managedFilm.id,
        };
        editThisFilm(managedFilm.id, filmToEdit);
      } else {
        createNewFilm(film);
      }
    },
  });
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
      <form onReset={formik.handleReset} onSubmit={formik.handleSubmit}>
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
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? (
            <div className="form-error">{formik.errors.title}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="tagline" className="form-control__label">
            Tagline
          </label>
          <input
            id="tagline"
            name="tagline"
            type="text"
            placeholder="Enter tagline"
            className="form-control__input"
            onChange={formik.handleChange}
            value={formik.values.tagline}
          />
          {formik.touched.tagline && formik.errors.tagline ? (
            <div className="form-error">{formik.errors.tagline}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="release_date" className="form-control__label">
            Release Date
          </label>
          <div className="custom-date">
            <input
              id="release_date"
              name="release_date"
              type="date"
              placeholder="Select Date"
              className="custom-date__input"
              onChange={formik.handleChange}
              value={formik.values.release_date}
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
          {formik.touched.release_date && formik.errors.release_date ? (
            <div className="form-error">{formik.errors.release_date}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="poster_path" className="form-control__label">
            Movie Url
          </label>
          <input
            id="poster_path"
            name="poster_path"
            type="url"
            placeholder="Enter Movie Url"
            className="form-control__input"
            onChange={formik.handleChange}
            value={formik.values.poster_path}
          />
          {formik.touched.poster_path && formik.errors.poster_path ? (
            <div className="form-error">{formik.errors.poster_path}</div>
          ) : null}
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
            {formik.values.genres.join(', ') || 'Select'}
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
                  onChange={formik.handleChange}
                  value={name.name}
                  checked={!!formik.values.genres.includes(name.name)}
                />
                <i className="custom-select__icon" />
                {name.name}
              </label>
            ))}
          </div>
          {formik.touched.genres && formik.errors.genres ? (
            <div className="form-error">{formik.errors.genres}</div>
          ) : null}
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
            onChange={formik.handleChange}
            value={formik.values.overview}
          />
          {formik.touched.overview && formik.errors.overview ? (
            <div className="form-error">{formik.errors.overview}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="runtime" className="form-control__label">
            Runtime
          </label>
          <input
            id="runtime"
            name="runtime"
            type="number"
            placeholder="Runtime"
            className="form-control__input form-control__input--number"
            onChange={formik.handleChange}
            value={formik.values.runtime}
          />
          {formik.touched.runtime && formik.errors.runtime ? (
            <div className="form-error">{formik.errors.runtime}</div>
          ) : null}
        </div>
        <div className="d-flex justify-content-end">
          <button type="reset" className="bttn bttn--invert mr-2">
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

export default connect(mapStateToProps, {
  createNewFilm: createFilm,
  editThisFilm: editFilm,
})(EditPopupIntro);

EditPopupIntro.propTypes = {
  createNewFilm: PropTypes.func.isRequired,
  editThisFilm: PropTypes.func.isRequired,
  managedFilm: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    runtime: PropTypes.number,
    overview: PropTypes.string,
    tagline: PropTypes.string,
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
