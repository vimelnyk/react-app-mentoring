import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import FilmListItem from '../film-list-item';
import NothingFound from '../nothing-found';
import convertYearView from '../../utilities/convertYearView';
import fixBackend from '../../utilities/fixBackend';
import convertSortType from '../../utilities/convertSortType';
import './film-list.scss';
import { fetchFilms, getFilmsNumber } from '../../actions/filmActions';

function FilmList({
  fetchFilmList,
  films,
  sortOption,
  filterOption,
  getFilmListLength,
}) {
  useEffect(() => {
    fetchFilmList();
  }, []);
  const matchSearchSlug = useRouteMatch('/search/:slug');
  const matchSearch = useRouteMatch('/search');
  const matchFilmSlug = useRouteMatch('/film/:slug');

  const sortFilms = (filmsArr, sortBy, sortOrder) => {
    if (sortOrder) {
      filmsArr.sort((a, b) => (
        convertSortType(sortBy, a[sortBy]) > convertSortType(sortBy, b[sortBy])
          ? -1
          : 1));
      return filmsArr;
    }
    filmsArr.sort((a, b) => (convertSortType(sortBy, a[sortBy]) > convertSortType(sortBy, b[sortBy])
      ? 1
      : -1));
    return filmsArr;
  };

  const filterFilms = (filmsArr, filterBy) => {
    if (filterBy === '') {
      return filmsArr;
    }
    const result = filmsArr.filter((film) => film.genres.includes(filterBy));
    return result;
  };

  const checkSearchExpression = () => {
    if (!matchSearchSlug) {
      if (matchSearch || matchFilmSlug) {
        return null;
      }
    }
    if (matchSearchSlug) {
      return matchSearchSlug.params.slug;
    }
    return '';
  };

  const searchFilms = (filmsArr, searchBy) => {
    if (searchBy === '') {
      return [];
    }
    if (searchBy === null) {
      return filmsArr;
    }
    const result = filmsArr.filter((film) => film.title.toLowerCase().includes(searchBy.toLowerCase()));
    return result;
  };

  const getFilmsView = (filmsArr, sortBy, sortOrder, filterBy, searchBy) => {
    const filteredFilms = filterFilms(filmsArr, filterBy);
    const sortedFilms = sortFilms(filteredFilms, sortBy, sortOrder);
    const searchedFilms = searchFilms(sortedFilms, searchBy);
    getFilmListLength(searchedFilms);
    return searchedFilms;
  };

  const filmsToShow = fixBackend(getFilmsView(
    films,
    sortOption,
    true,
    filterOption,
    checkSearchExpression(),
  ));
  if (filmsToShow && filmsToShow.length === 0) {
    return <NothingFound />;
  }
  return (
    <ul className="film-list">
      {filmsToShow.map((film) => (
        <li
          className="film-list__item col-12 col-lg-6 col-xl-4 mb-3"
          key={film.id}
        >
          <FilmListItem
            id={film.id}
            title={film.title}
            description={film.tagline}
            url={film.poster_path}
            year={convertYearView(film.release_date)}
          />
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  films: state.films.items,
  sortOption: state.films.sortBy,
  filterOption: state.films.genresFilter,
});
export default connect(mapStateToProps, {
  fetchFilmList: fetchFilms,
  getFilmListLength: getFilmsNumber,
})(FilmList);

FilmList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape).isRequired,
  fetchFilmList: PropTypes.func.isRequired,
  sortOption: PropTypes.string.isRequired,
  filterOption: PropTypes.string.isRequired,
  getFilmListLength: PropTypes.func.isRequired,
};
