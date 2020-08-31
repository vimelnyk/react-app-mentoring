import React from 'react';
import PropTypes from 'prop-types';
import Popup from '../popup';
import './delete-popup-intro.scss';

const DeletePopupIntro = ({ closePopup }) => (
  <Popup closePopup={closePopup}>
    <h2 className="heading mb-4">Delete Movie</h2>
    <p className="mb-4">Are you sure you want to delete this movie?</p>
    <div className="d-flex justify-content-end">
      <button type="button" className="bttn bttn--general">
        Confirm
      </button>
    </div>
  </Popup>
);

export default DeletePopupIntro;

DeletePopupIntro.propTypes = {
  closePopup: PropTypes.func.isRequired,
};
