import {
  FETCH_FILMS, CURRENT_ITEM, POPUP, MANAGED_ITEM,
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
    .then((res) => res.text())
    .then(() => dispatch(fetchFilms()))
    .then(() => dispatch(initPopupCondition('')));
};

export const createFilm = (filmData) => (dispatch) => {
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(filmData),
  })
    .then((res) => res.json())
    .then(() => dispatch(fetchFilms()))
    .then(() => dispatch(initPopupCondition('')))
    .catch((err) => console.log(err));
};

export const editFilm = (filmId, filmData) => (dispatch) => {
  fetch(apiUrl, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(filmData),
  })
    .then((res) => res.json())
    .then(() => dispatch(fetchFilms()))
    .then(() => dispatch(initPopupCondition('')))
    .catch((err) => console.log(err));
};

export const getItem = (id) => ({
  type: CURRENT_ITEM,
  payload: id,
});
export const initManagedItem = (id) => ({
  type: MANAGED_ITEM,
  payload: id,
});
