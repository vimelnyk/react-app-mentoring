import React from 'react';
import PropTypes from 'prop-types';
import SortNames from '../../constants/sort-names';
import './toolkit-sorter.scss';

const ToolkitSorter = ({ label }) => (
  <div className="toolkit-sorter">
    <label htmlFor="sortType" className="toolkit-sorter__label">
      {label}
    </label>
    <div className="toolkit-sorter__select-control">
      <select id="sortType" className="toolkit-sorter__select">
        {SortNames.map((name) => (<option key={name.id}>{name.name}</option>))}
      </select>
    </div>
  </div>
);

ToolkitSorter.propTypes = {
  label: PropTypes.string.isRequired,
};

export default ToolkitSorter;
