import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './search-back-btn.scss';
import { getItem } from '../../actions/filmActions';

const SearchBackBtn = ({ label, getFilmItem }) => (
  <button
    type="button"
    className="search-back-button"
    onClick={() => getFilmItem('')}
    aria-label={label}
  />
);
SearchBackBtn.propTypes = {
  label: PropTypes.string.isRequired,
  getFilmItem: PropTypes.func.isRequired,
};

export default connect(null, { getFilmItem: getItem })(SearchBackBtn);
