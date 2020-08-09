import React from 'react';

const App = () => (
  <>
    <header className="header">
      <div className="container">
        <span className="header__logo">
          Logo
        </span>
        <button type="button" className="header__button">+ Add Mowie</button>

      </div>
    </header>
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
              <option selected="true">Release Date</option>
              <option>Rating</option>
            </select>
          </div>
        </div>
      </div>
      <section className="film-list-container">
        <div className="container">
          <div className="row">
            <ul className="film-list">
              <li className="film-list__item">
                <div className="film-item">
                  <button type="button">Button</button>
                  <figure className="film-item__main">
                    <img src="/media/examples/elephant-660-480.jpg" alt="Elephant at sunset" />
                    <figcaption className="film-caption">
                      <h2>Title</h2>
                      <span />
                      <h3>Subtitle</h3>
                    </figcaption>
                  </figure>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <footer className="footer">Footer</footer>

    </main>
  </>
);
export default App;
