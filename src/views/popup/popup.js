import React from 'react';
import PropTypes from 'prop-types';

import './popup.scss';

const Popup = ({ closePopup, children }) => (
  <>
    <div
      onClick={() => closePopup()}
      className="overlay"
      aria-hidden="true"
    />
    <div className="popup">
      <button
        onClick={() => closePopup()}
        aria-label="Close"
        className="popup__button"
        type="button"
      >
        <i />
      </button>
      <div className="popup__body">{children}</div>
    </div>
  </>
);

export default Popup;

Popup.propTypes = {
  closePopup: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
