import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './toolkit-result.scss';

const ToolkitResult = ({ filmsNumber }) => (
  <span className={`toolkit-result ${filmsNumber === 0 && 'd-none'}`}>
    <b>
      {filmsNumber}
      {' '}
    </b>
    {filmsNumber === 1 ? 'movie' : 'movies'}
    {' '}
    found
  </span>
);

const mapStateToProps = (state) => ({
  filmsNumber: state.films.filmsNumber,
});
export default connect(mapStateToProps)(
  ToolkitResult,
);
ToolkitResult.propTypes = {
  filmsNumber: PropTypes.number.isRequired,
};
