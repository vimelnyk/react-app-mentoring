import React from 'react';
import PropTypes from 'prop-types';
import './add-film.scss';
import { connect } from 'react-redux';
import { initPopupCondition, initManagedItem } from '../../actions/filmActions';

const AddFilm = ({ label, doInitPopupCondition, doInitManagedItem }) => (
  <button
    type="button"
    className="add-film-button"
    onClick={() => {
      doInitPopupCondition('editMovie');
      doInitManagedItem('');
    }}
  >
    +
    {label}
  </button>
);
AddFilm.propTypes = {
  label: PropTypes.string.isRequired,
  doInitPopupCondition: PropTypes.func.isRequired,
  doInitManagedItem: PropTypes.func.isRequired,
};

export default connect(null, {
  doInitPopupCondition: initPopupCondition,
  doInitManagedItem: initManagedItem,
})(AddFilm);
