import React from 'react';
import PropTypes from 'prop-types';
import './film-list-item.scss';
import { connect } from 'react-redux';
import EditDelete from '../edit-delete';
import { getItem } from '../../actions/filmActions';

const FilmListItem = ({
  getCurrentFilmItem,
  id,
  title,
  url,
  year,
  description,
}) => (
  <div
    className="film-item"
    role="button"
    onKeyPress={() => getCurrentFilmItem(id)}
    onClick={() => getCurrentFilmItem(id)}
    tabIndex="0"
  >
    <EditDelete id={id} />
    <figure className="film-item__main">
      <img
        src={url}
        alt={title}
        className="film-item__image"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = '/img/mock/image.jpg';
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
  </div>
);
FilmListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  description: PropTypes.string,
  getCurrentFilmItem: PropTypes.func.isRequired,
};

export default connect(null, { getCurrentFilmItem: getItem })(FilmListItem);
