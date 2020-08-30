import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './edit-delete.scss';

export default class EditDelete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  openDropdown() {
    this.setState({
      isOpen: true,
    });
  }

  closeDropdown() {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    const { openPopup, openDeletePopup } = this.props;
    const { isOpen } = this.state;
    return (
      <div className="edit-delete" onMouseLeave={() => this.closeDropdown()}>
        <button
          type="button"
          className="edit-delete__open"
          aria-label="Edit options"
          onClick={() => this.openDropdown()}
        >
          <i className="edit-delete__icon" />
        </button>
        <div
          className={`edit-delete__dropdown ${
            isOpen ? 'active' : null
          }`}
        >
          <button
            type="button"
            className="edit-delete__close"
            onClick={() => this.closeDropdown()}
          >
            <i className="edit-delete__close-icon" />
          </button>
          <button
            type="button"
            className="edit-delete__button"
            onClick={() => openPopup()}
          >
            Edit
          </button>
          <button
            type="button"
            className="edit-delete__button"
            onClick={() => openDeletePopup()}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

EditDelete.propTypes = {
  openPopup: PropTypes.func.isRequired,
  openDeletePopup: PropTypes.func.isRequired,
};
