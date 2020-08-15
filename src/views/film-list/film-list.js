import React from 'react';
import FilmListItem from '../film-list-item';
import Films from '../../constants/film-mock';
import './film-list.scss';

export default function FilmList() {
  return (
    <ul className="film-list">
      {Films.map((film) => (
        <li className="film-list__item col col-lg-4 mb-3" key={film.id}>
          <FilmListItem
            title={film.title}
            description={film.description}
            url={film.url}
            year={film.year}
          />
        </li>
      ))}
    </ul>
  );
}
