import React, { Component } from 'react';
import './edit-popup-intro.scss';
import PropTypes from 'prop-types';
import FilterNames from '../../constants/filter-names';
import Popup from '../popup';

export default class EditPopupIntro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
    };
  }

  toggleSelect() {
    this.setState((state) => ({
      toggle: !state.toggle,
    }));
  }

  render() {
    const { submitForm, resetForm, closePopup } = this.props;
    const { toggle } = this.state;
    return (
      <Popup closePopup={closePopup}>
        <form>
          <h2 className="heading mb-4">Edit Movie</h2>
          <div className="form-control">
            <label htmlFor="title" className="form-control__label">
              Title
            </label>
            <input
              id="title"
              type="text"
              name="title"
              placeholder="Enter title"
              className="form-control__input"
            />
          </div>
          <div className="form-control">
            <label htmlFor="filmid" className="form-control__label">
              Movie ID
            </label>
            <input
              id="filmid"
              type="text"
              name="filmid"
              placeholder="id8"
              className="form-control__input"
              readOnly
            />
          </div>
          <div className="form-control">
            <label htmlFor="date" className="form-control__label">
              Release Date
            </label>
            <div className="custom-date">
              <input
                id="date"
                type="date"
                name="date"
                placeholder="Select Date"
                className="custom-date__input"
              />
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#f65261"
                  d="M10 12h4v4h-4zM16 12h4v4h-4zM22 12h4v4h-4zM4 24h4v4h-4zM10 24h4v4h-4zM16 24h4v4h-4zM10 18h4v4h-4zM16 18h4v4h-4zM22 18h4v4h-4zM4 18h4v4h-4zM26 0v2h-4v-2h-14v2h-4v-2h-4v32h30v-32h-4zM28 30h-26v-22h26v22z"
                />
              </svg>
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="url" className="form-control__label">
              Movie Url
            </label>
            <input
              id="url"
              type="text"
              name="url"
              placeholder="Enter Movie Url"
              className="form-control__input"
            />
          </div>
          <fieldset className="form-control custom-select">
            <legend className="custom-select__label form-control__label">
              Genre
            </legend>
            <button
              className="custom-select__button"
              type="button"
              onClick={() => this.toggleSelect()}
            >
              Select
            </button>
            <div
              className={`custom-select__dropdown ${toggle ? 'active' : null}`}
            >
              {FilterNames.map((name) => (
                <label className="custom-select__checkbox" key={name.id}>
                  <input type="checkbox" className="custom-select__input" />
                  <i className="custom-select__icon" />
                  {name.name}
                </label>
              ))}
            </div>
          </fieldset>
          <div className="form-control">
            <label htmlFor="overview" className="form-control__label">
              Overview
            </label>
            <input
              id="overview"
              type="text"
              name="overview"
              placeholder="Enter Movie Url"
              className="form-control__input"
            />
          </div>
          <div className="form-control">
            <label htmlFor="runtime" className="form-control__label">
              Runtime
            </label>
            <input
              id="runtime"
              type="text"
              name="runtime"
              placeholder="Runtime"
              className="form-control__input"
            />
          </div>
          <div className="d-flex justify-content-end">
            <button
              type="button"
              className="bttn bttn--invert mr-2"
              onClick={resetForm}
            >
              Reset
            </button>
            <button
              type="button"
              className="bttn bttn--general"
              onClick={submitForm}
            >
              Save
            </button>
          </div>
        </form>
      </Popup>
    );
  }
}

EditPopupIntro.propTypes = {
  closePopup: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
};
