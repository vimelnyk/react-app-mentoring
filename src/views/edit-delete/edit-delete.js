import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './edit-delete.scss';
import { initPopupCondition, initManagedItem } from '../../actions/filmActions';

function EditDelete({ id, initPopupCondition, initManagedItem }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="edit-delete" onMouseLeave={() => setIsOpen(false)}>
      <button
        type="button"
        className="edit-delete__open"
        aria-label="Edit options"
        onClick={() => {
          setIsOpen(true);
          initManagedItem(id);
        }}
      >
        <i className="edit-delete__icon" />
      </button>
      <div className={`edit-delete__dropdown ${isOpen ? 'active' : null}`}>
        <button
          type="button"
          className="edit-delete__close"
          onClick={() => setIsOpen(false)}
        >
          <i className="edit-delete__close-icon" />
        </button>
        <button
          type="button"
          className="edit-delete__button"
          onClick={() => {
            initPopupCondition('editMovie');
          }}
        >
          Edit
        </button>
        <button
          type="button"
          className="edit-delete__button"
          onClick={() => initPopupCondition('deleteMovie')}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default connect(null, { initPopupCondition, initManagedItem })(
  EditDelete,
);

EditDelete.propTypes = {
  id: PropTypes.number.isRequired,
  initPopupCondition: PropTypes.func.isRequired,
  initManagedItem: PropTypes.func.isRequired,
};
