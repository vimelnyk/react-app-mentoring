import React from 'react';
import PropTypes from 'prop-types';
import FilmListItem from '../film-list-item';
import './film-list.scss';

const FilmList = ({
  openPopup, openDeletePopup, items, changeCurrentItem,
}) => (
  <ul className="film-list">
    {items.map((film) => (
      <li className="film-list__item col col-lg-4 mb-3" key={film.id}>
        <FilmListItem
          id={film.id}
          title={film.title}
          description={film.description}
          url={film.url}
          year={film.year}
          openPopup={openPopup}
          openDeletePopup={openDeletePopup}
          changeCurrentItem={changeCurrentItem}
        />
      </li>
    ))}
  </ul>
);

export default FilmList;

FilmList.propTypes = {
  openPopup: PropTypes.func.isRequired,
  openDeletePopup: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeCurrentItem: PropTypes.func.isRequired,
};
