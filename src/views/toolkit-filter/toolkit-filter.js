import React from 'react';
import PropTypes from 'prop-types';
import './toolkit-filter.scss';
import { connect } from 'react-redux';
import FilterNames from '../../constants/filter-names';
import { initFilter } from '../../actions/filmActions';

const ToolkitFilter = ({ initThisFilter, filterOption }) => (
  <div className="toolkit-filter">
    {FilterNames.map((name) => (
      <button
        type="button"
        className={`toolkit-filter__button ${
          name.name === filterOption
          || (name.name === 'All' && filterOption === '')
            ? 'active'
            : ''
        }`}
        key={name.id}
        value={name.name !== 'All' ? name.name : ''}
        onClick={(e) => initThisFilter(e.target.value)}
      >
        {name.name}
      </button>
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  filterOption: state.films.genresFilter,
});
export default connect(mapStateToProps, { initThisFilter: initFilter })(ToolkitFilter);

ToolkitFilter.propTypes = {
  initThisFilter: PropTypes.func.isRequired,
  filterOption: PropTypes.string.isRequired,
};
