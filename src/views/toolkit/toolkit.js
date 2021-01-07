import React from 'react';
import ToolkitFilter from '../toolkit-filter';
import ToolkitSorter from '../toolkit-sorter';
import ToolkitResult from '../toolkit-result';
import './toolkit.scss';

const Toolkit = () => (
  <div className="toolkit">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="d-flex justify-content-between align-items-center toolkit__bar">
            <ToolkitFilter />
            <ToolkitSorter label="Sort by" />
          </div>
          <div className="toolkit__result">
            <ToolkitResult />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Toolkit;
