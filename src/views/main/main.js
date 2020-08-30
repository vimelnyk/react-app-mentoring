import React from 'react';
import PropTypes from 'prop-types';
import Toolkit from '../toolkit';
import FilmList from '../film-list';
import './main.scss';
import ErrorBoundary from '../../containers/error-boundary';

const Main = ({ openPopup, openDeletePopup }) => (
  <main className="main">
    <Toolkit />
    <section className="film-list-container">
      <div className="container">
        <div className="row">
          <ErrorBoundary>
            <FilmList openPopup={openPopup} openDeletePopup={openDeletePopup} />
          </ErrorBoundary>
        </div>
      </div>
    </section>
  </main>
);

export default Main;
Main.propTypes = {
  openPopup: PropTypes.func.isRequired,
  openDeletePopup: PropTypes.func.isRequired,
};
