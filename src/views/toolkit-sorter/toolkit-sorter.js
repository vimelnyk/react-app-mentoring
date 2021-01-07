import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SortNames from '../../constants/sort-names';
import './toolkit-sorter.scss';
import { initSortBy } from '../../actions/filmActions';

const ToolkitSorter = ({ label, initThisSort, sortOption }) => (
  <div className="toolkit-sorter">
    <label htmlFor="sortType" className="toolkit-sorter__label">
      {label}
    </label>
    <div className="toolkit-sorter__select-control">
      <select
        id="sortType"
        className="toolkit-sorter__select"
        value={sortOption}
        onChange={(e) => initThisSort(e.target.value)}
      >
        {SortNames.map((name) => (
          <option key={name.id} value={name.val}>
            {name.name}
          </option>
        ))}
      </select>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  sortOption: state.films.sortBy,
});

ToolkitSorter.propTypes = {
  label: PropTypes.string.isRequired,
  sortOption: PropTypes.string.isRequired,
  initThisSort: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { initThisSort: initSortBy })(
  ToolkitSorter,
);
