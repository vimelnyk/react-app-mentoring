/* eslint-disable no-alert */
import {
  FETCH_FILMS,
  CURRENT_ITEM,
  POPUP,
  MANAGED_ITEM,
  SORT_BY,
  SORT_ORDER,
  GENRES_FILTER,
  FILMS_NUMBER,
} from './types';

const apiUrl = 'http://localhost:4000/movies';

export const fetchFilms = () => (dispatch) => {
  fetch(`${apiUrl}/?limit=4000`, { method: 'GET' })
    .then((res) => res.json())
    .then((films) => dispatch({
      type: FETCH_FILMS,
      payload: films.data,
    }));
};

export const initPopupCondition = (condition) => ({
  type: POPUP,
  payload: condition,
});

export const deleteFilm = (filmId) => (dispatch) => {
  fetch(`${apiUrl}/${filmId}`, { method: 'DELETE' })
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      } else {
        alert('DELETED');
      }
      return res.text();
    })
    .then(() => dispatch(fetchFilms()))
    .then(() => dispatch(initPopupCondition('')))
    .catch((err) => alert(err));
};

export const createFilm = (filmData) => (dispatch) => {
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(filmData),
  })
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      } else {
        alert(res.statusText);
      }
      return res.json();
    })
    .then(() => dispatch(fetchFilms()))
    .then(() => dispatch(initPopupCondition('')))
    .catch((err) => alert(err));
};

export const editFilm = (filmId, filmData) => (dispatch) => {
  fetch(apiUrl, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(filmData),
  })
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      } else {
        alert(res.statusText);
      }
      return res.json();
    })
    .then(() => dispatch(fetchFilms()))
    .then(() => dispatch(initPopupCondition('')))
    .catch((err) => alert(err));
};

export const getItem = (id) => ({
  type: CURRENT_ITEM,
  payload: id,
});

export const initManagedItem = (id) => ({
  type: MANAGED_ITEM,
  payload: id,
});

export const initSortBy = (sortBy) => ({
  type: SORT_BY,
  payload: sortBy,
});

export const initSortOrder = (sortOrder) => ({
  type: SORT_ORDER,
  payload: sortOrder,
});

export const initFilter = (filterBy) => ({
  type: GENRES_FILTER,
  payload: filterBy,
});

export const getFilmsNumber = (films) => ({
  type: FILMS_NUMBER,
  payload: films,
});
