import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPopupCondition } from '../../actions/filmActions';

import './popup.scss';

const Popup = ({ getPopupCondition, children }) => (
  <>
    <div
      onClick={() => getPopupCondition('')}
      className="overlay"
      aria-hidden="true"
    />
    <div className="popup">
      <button
        onClick={() => getPopupCondition('')}
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

export default connect(null, { getPopupCondition })(Popup);

Popup.propTypes = {
  getPopupCondition: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
