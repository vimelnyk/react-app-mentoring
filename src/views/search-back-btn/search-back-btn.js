import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './search-back-btn.scss';
import { getItem } from '../../actions/filmActions';

const SearchBackBtn = ({ label, getItem }) => (
  <button
    type="button"
    className="search-back-button"
    onClick={() => getItem('')}
    aria-label={label}
  />
);
SearchBackBtn.propTypes = {
  label: PropTypes.string.isRequired,
};

export default connect(null, { getItem })(SearchBackBtn);
