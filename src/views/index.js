import React from 'react';
import Header from './header';
import FilmList from './film-list';

const App = () => (
  <>
    <Header />
    <section className="intro">

      <div className="container">
        <form>
          <label htmlFor="Search1">
            Find Your Movie
          </label>
          <input id="Search1" name="search" type="text" />
        </form>
      </div>

    </section>
    <main className="main">

      <div className="toolkit">
        <div className="container">
          <div className="toolkit__filter">
            <button type="button">All</button>
            <button type="button">Documentary</button>
            <button type="button">Comedy</button>
            <button type="button">Horror</button>
            <button type="button">Crime</button>
          </div>
          <div className="toolkit__sort">
            <label htmlFor="sortType">
              Sort by
            </label>
            <select id="sortType">
              <option defaultValue>Release Date</option>
              <option>Rating</option>
            </select>
          </div>
        </div>
      </div>
      <section className="film-list-container">
        <div className="container">
          <div className="row">
            <FilmList />
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          Footer

        </div>
      </footer>

    </main>
  </>
);
export default App;
