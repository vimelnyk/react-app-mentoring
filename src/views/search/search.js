import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './search.scss';
import { useHistory } from 'react-router-dom';

function Search({ label, buttonLabel, placeholder }) {
  const [searchValue, setSearchValue] = useState('');
  const history = useHistory();
  const onFormSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${encodeURI(
      searchValue,
    )}`);
  };
  return (
    <section className="intro d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <form className="search-form" onSubmit={(e) => onFormSubmit(e)}>
            <label htmlFor="Search" className="search-form__label mb-3">
              {label}
            </label>
            <div className="search-form__group">
              <input
                id="Search"
                name="search"
                type="text"
                className="search-form__input"
                placeholder={placeholder}
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
              />
              <button type="submit" className="search-form__button">
                {buttonLabel}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
Search.propTypes = {
  label: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Search;
