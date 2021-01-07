import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import './logo.scss';

const Logo = () => (
  <Router>
    <Link to="/">
      <span className="logo">
        <b>netflix</b>
        routte
      </span>
    </Link>
  </Router>
);

export default Logo;
