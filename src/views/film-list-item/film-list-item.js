import React from 'react';
import PropTypes from 'prop-types';
import './film-list-item.scss';
import EditDelete from '../edit-delete';

const FilmListItem = ({
  title,
  url,
  year,
  description,
  openPopup,
  openDeletePopup,
}) => (
  <div className="film-item">
    <EditDelete openPopup={openPopup} openDeletePopup={openDeletePopup} />
    <figure className="film-item__main">
      <img src={url} alt={title} className="film-item__image" />
      <figcaption className="film-item__caption caption">
        <div className="caption__head d-flex justify-content-between">
          <h2 className="caption__title">{title}</h2>
          <span className="caption__date">{year}</span>
        </div>
        <div className="caption__body">
          <h3 className="caption__subtitle">{description}</h3>
        </div>
      </figcaption>
    </figure>
  </div>
);
FilmListItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  openPopup: PropTypes.func.isRequired,
  openDeletePopup: PropTypes.func.isRequired,
};

export default FilmListItem;
