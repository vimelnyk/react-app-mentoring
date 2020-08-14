import React from 'react';
import PropTypes from 'prop-types';
import './film-list-item.scss';

const FilmListItem = ({
  title, url, year, description,
}) => (
  <div className="film-item">
    <button type="button" className="film-item__button" aria-label="Edit options" />
    <figure className="film-item__main">
      <img src={url} alt={title} className="film-item__image" />
      <figcaption className="film-item__caption">
        <h2>{title}</h2>
        <span>{year}</span>
        <h3>{description}</h3>
      </figcaption>
    </figure>
  </div>
);
FilmListItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FilmListItem;
