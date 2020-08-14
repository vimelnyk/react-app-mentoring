import React from 'react';
import ToolkitFilter from '../toolkit-filter';
import ToolkitSorter from '../toolkit-sorter';
import ToolkitResult from '../toolkit-result';
import './toolkit.scss';

const Toolkit = () => (
  <div className="toolkit">
    <div className="container">
      <div className="row ">
        <div className="col-12 d-flex justify-content-between">
          <ToolkitFilter />
          <ToolkitSorter />
        </div>
        <div className="col-12">
          <ToolkitResult />
        </div>
      </div>
    </div>
  </div>
);

export default Toolkit;
