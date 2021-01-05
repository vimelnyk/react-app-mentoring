import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { initPopupCondition } from '../../actions/filmActions';
import './popup.scss';

const Popup = ({ doInitPopupCondition, children }) => (
  <>
    <div
      onClick={() => doInitPopupCondition('')}
      className="overlay"
      aria-hidden="true"
    />
    <div className="popup">
      <button
        onClick={() => doInitPopupCondition('')}
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

export default connect(null, { doInitPopupCondition: initPopupCondition })(Popup);

Popup.propTypes = {
  doInitPopupCondition: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
