import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddPopupIntro from '../add-popup-intro';
import EditPopupIntro from '../edit-popup-intro';
import DeletePopupIntro from '../delete-popup-intro';
import './popup.scss';

class Popup extends Component {
  render() {
    const {
      closePopup, submitForm, resetForm, showPopup,
    } = this.props;
    const Intro = () => {
      if (showPopup === 'addMovie') {
        return (
          <AddPopupIntro
            closePopup={closePopup}
            submitForm={submitForm}
            resetForm={resetForm}
          />
        );
      }
      if (showPopup === 'editMovie') {
        return (
          <EditPopupIntro
            closePopup={closePopup}
            submitForm={submitForm}
            resetForm={resetForm}
          />
        );
      }
      if (showPopup === 'deleteMovie') {
        return (
          <DeletePopupIntro
            closePopup={closePopup}
          />
        );
      }
      return '';
    };

    return (
      <>
        <div onClick={closePopup} className="overlay" aria-hidden="true" />
        <div className="popup">
          <button
            onClick={() => closePopup()}
            aria-label="Close"
            className="popup__button"
            type="button"
          >
            <i />
          </button>
          <div className="popup__body"><Intro /></div>
        </div>
      </>
    );
  }
}
export default Popup;

Popup.propTypes = {
  closePopup: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  showPopup: PropTypes.string.isRequired,
};
