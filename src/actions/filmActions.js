import {
  FETCH_FILMS, NEW_FILM, DELETE_FILM, CURRENT_ITEM, POPUP,
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

export const getPopupCondition = (condition) => ({
  type: POPUP,
  payload: condition,
});

export const deleteFilm = (filmId) => (dispatch) => {
  fetch(`${apiUrl}/${filmId}`, { method: 'DELETE' })
    .then((res) => res.text())
    .then(() => dispatch(fetchFilms()))
    .then(() => dispatch(getPopupCondition('')));
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
    .then(() => dispatch(getPopupCondition('')))
    .catch((err) => console.log(err));
};

export const getItem = (id) => ({
  type: CURRENT_ITEM,
  payload: id,
});
