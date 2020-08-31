import React from 'react';
import './toolkit-filter.scss';
import FilterNames from '../../constants/filter-names';

const ToolkitFilter = () => (
  <div className="toolkit-filter">
    {FilterNames.map((name) => (
      <button type="button" className="toolkit-filter__button" key={name.id}>{name.name}</button>
    ))}
  </div>
);

export default ToolkitFilter;
