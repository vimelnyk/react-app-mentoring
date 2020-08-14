import React from 'react';
import './toolkit-sorter.scss';

const ToolkitSorter = () => (
  <div className="toolkit-sort">
    <label htmlFor="sortType">
      Sort by
    </label>
    <select id="sortType">
      <option defaultValue>Release Date</option>
      <option>Rating</option>
    </select>
  </div>
);

export default ToolkitSorter;
