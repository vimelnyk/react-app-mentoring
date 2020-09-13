import React from 'react';
import PropTypes from 'prop-types';
import './search-back-btn.scss';

const SearchBackBtn = ({ label, changeCurrentItem }) => (
  <button
    type="button"
    className="search-back-button"
    onClick={() => changeCurrentItem('')}
    aria-label={label}
  />
);
SearchBackBtn.propTypes = {
  label: PropTypes.string.isRequired,
  changeCurrentItem: PropTypes.func.isRequired,
};

export default SearchBackBtn;
