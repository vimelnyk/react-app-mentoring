import React from 'react';
import PropTypes from 'prop-types';
import './film-list-item.scss';
import { Link } from 'react-router-dom';
import EditDelete from '../edit-delete';

const FilmListItem = ({
  id,
  title,
  url,
  year,
  description,
}) => (
  <>
    <EditDelete id={id} />
    <div
      className="film-item"
    >
      <Link to={`/film/${id}`}>
        <figure className="film-item__main">
          <img
            src={url}
            alt={title}
            className="film-item__image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/public/img/mock/image.jpg';
            }}
          />
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
      </Link>
    </div>
  </>
);
FilmListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  description: PropTypes.string,
};
FilmListItem.defaultProps = { description: 'description' };
export default FilmListItem;
