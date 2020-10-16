import React from 'react';
import PropTypes from 'prop-types';
import './add-film.scss';
import { connect } from 'react-redux';
import { initPopupCondition, initManagedItem } from '../../actions/filmActions';

const AddFilm = ({ label, initPopupCondition, initManagedItem }) => (
  <button
    type="button"
    className="add-film-button"
    onClick={() => {
      initPopupCondition('editMovie');
      initManagedItem('');
    }}
  >
    +
    {label}
  </button>
);
AddFilm.propTypes = {
  label: PropTypes.string.isRequired,
  initPopupCondition: PropTypes.func.isRequired,
  initManagedItem: PropTypes.func.isRequired,
};

export default connect(null, { initPopupCondition, initManagedItem })(AddFilm);
