import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './edit-delete.scss';
import { getPopupCondition } from '../../actions/filmActions';

function EditDelete({ getPopupCondition }) {
  const [isOpen, setIsOpen] = useState(false);
  const openDropdown = () => {
    setIsOpen(true);
  };
  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="edit-delete" onMouseLeave={closeDropdown}>
      <button
        type="button"
        className="edit-delete__open"
        aria-label="Edit options"
        onClick={openDropdown}
      >
        <i className="edit-delete__icon" />
      </button>
      <div className={`edit-delete__dropdown ${isOpen ? 'active' : null}`}>
        <button
          type="button"
          className="edit-delete__close"
          onClick={closeDropdown}
        >
          <i className="edit-delete__close-icon" />
        </button>
        <button
          type="button"
          className="edit-delete__button"
          onClick={() => getPopupCondition('editMovie')}
        >
          Edit
        </button>
        <button
          type="button"
          className="edit-delete__button"
          onClick={() => getPopupCondition('deleteMovie')}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default connect(null, { getPopupCondition })(EditDelete);

EditDelete.propTypes = {
  getPopupCondition: PropTypes.func.isRequired,
};
