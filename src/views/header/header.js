import React from 'react';
import {
  Switch, Route,
} from 'react-router-dom';
import AddFilm from '../add-film';
import SearchBackBtn from '../search-back-btn';
import Logo from '../logo';
import './header.scss';

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="row ">
        <div className="col d-flex  justify-content-between align-items-center">
          <Logo />
          <Switch>
            <Route path="/(|search)">
              <AddFilm label="Add Movie" />
            </Route>
            <Route path="/film/:id">
              <SearchBackBtn label="Find Your Movie" />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
