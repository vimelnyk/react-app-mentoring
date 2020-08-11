import React from 'react';
// import PropTypes from 'prop-types';
// import FilmListItem from '../film-list-item';
import './film-list.scss';

export default function FilmList() {
  return (
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
  );
}

// FilmList.propTypes = {
//   items: PropTypes.arrayOf(PropTypes.object).isRequired,
// };
