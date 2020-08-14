import React from 'react';
import FilmListItem from '../film-list-item';
import './film-list.scss';

const films = [
  {
    title: 'Film1',
    description: 'Film1 description',
    url: '../../img/mock/1.jpg',
    year: '2020',
    id: '1a',
  },
  {
    title: 'Film2',
    description: 'Film2 description',
    url: '../../img/mock/1.jpg',
    year: '2010',
    id: '2a',
  },
  {
    title: 'Film3',
    description: 'Film3 description',
    url: '../../img/mock/3.jpg',
    year: '2003',
    id: '3a',
  },
  {
    title: 'Film4',
    description: 'Film3 description',
    url: '../../img/mock/4.jpg',
    year: '2015',
    id: '4a',
  },
];

export default function FilmList() {
  return (
    <ul className="film-list">
      {films.map((film) => (
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
