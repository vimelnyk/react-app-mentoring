import React from 'react';
import PropTypes from 'prop-types';
import Toolkit from '../toolkit';
import FilmList from '../film-list';
import './main.scss';
import ErrorBoundary from '../../containers/error-boundary';

const Main = ({ openPopup, openDeletePopup, items }) => (
  <main className="main">
    <Toolkit />
    <section className="film-list-container">
      <div className="container">
        <div className="row">
          <ErrorBoundary>
            <FilmList
              openPopup={openPopup}
              openDeletePopup={openDeletePopup}
              items={items}
            />
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
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
