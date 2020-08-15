import React from 'react';
import Toolkit from '../toolkit';
import FilmList from '../film-list';
import './main.scss';

const Main = () => (
  <main className="main">
    <Toolkit />
    <section className="film-list-container">
      <div className="container">
        <div className="row">
          <FilmList />
        </div>
      </div>
    </section>
  </main>
);

export default Main;
