import React from 'react';
import Toolkit from '../toolkit';
import FilmList from '../film-list';
import './main.scss';
import ErrorBoundary from '../../containers/error-boundary';

const Main = () => (
  <main className="main">
    <Toolkit />
    <section className="film-list-container">
      <div className="container">
        <div className="row">
          <ErrorBoundary>
            <FilmList />
          </ErrorBoundary>
        </div>
      </div>
    </section>
  </main>
);

export default Main;
