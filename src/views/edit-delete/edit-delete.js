import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './edit-delete.scss';

function EditDelete({ openPopup, openDeletePopup }) {
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
          onClick={() => openPopup('editMovie')}
        >
          Edit
        </button>
        <button
          type="button"
          className="edit-delete__button"
          onClick={() => openDeletePopup('deleteMovie')}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default EditDelete;
EditDelete.propTypes = {
  openPopup: PropTypes.func.isRequired,
  openDeletePopup: PropTypes.func.isRequired,
};
