import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilmListItem from '../film-list-item';
import convertYearView from '../../utilities/convertYearView';
import './film-list.scss';
import { fetchFilms } from '../../actions/filmActions';

function FilmList({ fetchFilms, films, newFilm }) {
  useEffect(() => {
    fetchFilms();
  }, []);

  return (
    <ul className="film-list">
      {
    films.map((film) => (
      <li className="film-list__item col-12 col-lg-6 col-xl-4 mb-3" key={film.id}>
        <FilmListItem
          id={film.id}
          title={film.title}
          description={film.tagline}
          url={film.poster_path}
          year={convertYearView(film.release_date)}
        />
      </li>
    ))
  }
    </ul>
  );
}

// const FilmList = ({ openPopup, openDeletePopup, items, changeCurrentItem }) => (
//   <ul className="film-list">
//     {items.map((film) => (
//       <li className="film-list__item col col-lg-4 mb-3" key={film.id}>
//         <FilmListItem
//           id={film.id}
//           title={film.title}
//           description={film.tagline}
//           url={film.poster_path}
//           year={convertYearView(film.release_date)}
//           openPopup={openPopup}
//           openDeletePopup={openDeletePopup}
//           changeCurrentItem={changeCurrentItem}
//         />
//       </li>
//     ))}
//   </ul>
// );
const mapStateToProps = (state) => ({
  films: state.films.items,
  newFilm: state.films.item,
});
export default connect(mapStateToProps, { fetchFilms })(FilmList);

// FilmList.propTypes = {
//   openPopup: PropTypes.func.isRequired,
//   openDeletePopup: PropTypes.func.isRequired,
//   items: PropTypes.arrayOf(PropTypes.object).isRequired,
//   changeCurrentItem: PropTypes.func.isRequired,
// };
