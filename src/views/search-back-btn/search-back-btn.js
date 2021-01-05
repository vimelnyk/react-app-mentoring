import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,

} from 'react-router-dom';
import './search-back-btn.scss';

const SearchBackBtn = ({ label }) => (
  <div>
    <Link className="search-back-button" to="/" title={label} />
  </div>
);
SearchBackBtn.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SearchBackBtn;
