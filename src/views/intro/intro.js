import React from 'react';
import {
  Switch, Route, Redirect,
} from 'react-router-dom';
import Search from '../search';
import FilmDetails from '../film-details';
import './intro.scss';

const Intro = () => (
  <Switch>
    <Route path="/(|search)/">
      <Search
        label="Find Your Movie"
        placeholder="What do you want to watch?"
        buttonLabel="Search"
      />
    </Route>

    <Route path="/film/:id">
      <FilmDetails />
    </Route>
    <Route exact path="/film">
      <Redirect to="/page-not-found" />
    </Route>

    <Route path="*" />
  </Switch>
);

export default Intro;
