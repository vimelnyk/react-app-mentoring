import React from 'react';
import PropTypes from 'prop-types';
import './add-film.scss';

const AddFilm = ({ label }) => (
  <button type="button" className="add-film-button">
    +
    {label}
  </button>
);
AddFilm.propTypes = {
  label: PropTypes.string.isRequired,
};

export default AddFilm;
