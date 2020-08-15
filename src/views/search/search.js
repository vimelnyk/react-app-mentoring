import React from 'react';
import PropTypes from 'prop-types';
import './search.scss';

const Search = ({ label, buttonLabel, placeholder }) => (
  <form className="search-form">
    <label htmlFor="Search" className="search-form__label mb-3">
      {label}
    </label>
    <div className="search-form__group">
      <input id="Search" name="search" type="text" className="search-form__input" placeholder={placeholder} />
      <button type="button" className="search-form__button">{buttonLabel}</button>
    </div>
  </form>
);
Search.propTypes = {
  label: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Search;
