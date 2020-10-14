import React from 'react';
import PropTypes from 'prop-types';
import './add-film.scss';
import { connect } from 'react-redux';
import { getPopupCondition } from '../../actions/filmActions';

const AddFilm = ({ label, getPopupCondition }) => (
  <button
    type="button"
    className="add-film-button"
    onClick={() => getPopupCondition('addMovie')}
  >
    +
    {label}
  </button>
);
AddFilm.propTypes = {
  label: PropTypes.string.isRequired,
  getPopupCondition: PropTypes.func.isRequired,
};

export default connect(null, { getPopupCondition })(AddFilm);
