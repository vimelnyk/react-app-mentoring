import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './edit-delete.scss';
import { initPopupCondition, initManagedItem } from '../../actions/filmActions';

function EditDelete({ id, doInitPopupCondition, doInitManagedItem }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="edit-delete" onMouseLeave={() => setIsOpen(false)}>
      <button
        type="button"
        className="edit-delete__open"
        aria-label="Edit options"
        onClick={() => {
          setIsOpen(true);
          doInitManagedItem(id);
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
            doInitPopupCondition('editMovie');
          }}
        >
          Edit
        </button>
        <button
          type="button"
          className="edit-delete__button"
          onClick={() => doInitPopupCondition('deleteMovie')}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default connect(null, {
  doInitPopupCondition: initPopupCondition,
  doInitManagedItem: initManagedItem,
})(EditDelete);

EditDelete.propTypes = {
  id: PropTypes.number.isRequired,
  doInitPopupCondition: PropTypes.func.isRequired,
  doInitManagedItem: PropTypes.func.isRequired,
};
