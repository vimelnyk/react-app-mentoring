import React from 'react';
import PropTypes from 'prop-types';
import './add-film.scss';

const AddFilm = ({ label, openPopup }) => (
  <button
    type="button"
    className="add-film-button"
    onClick={() => openPopup('addMovie')}
  >
    +
    {label}
  </button>
);
AddFilm.propTypes = {
  label: PropTypes.string.isRequired,
  openPopup: PropTypes.func.isRequired,
};

export default AddFilm;
