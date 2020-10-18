/* eslint-disable func-names */
import {
  FETCH_FILMS,
  DELETE_FILM,
  CURRENT_ITEM,
  MANAGED_ITEM,
  POPUP,
  SORT_BY,
  SORT_ORDER,
  GENRES_FILTER,
  FILMS_NUMBER,
} from '../actions/types';

const initialState = {
  items: [],
  item: {},
  currentItem: {},
  managedItem: {},
  popup: '',
  sortBy: '',
  sortOrder: null,
  genresFilter: '',
  filmsNumber: 0,
};

const getCurrentFilm = (state, id) => {
  if (id === '') {
    return {};
  }
  const arr = state.filter((item) => item.id === id);
  return arr[0];
};

const fixBackend = (state) => state.reverse().slice(0, 39);

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_FILMS:
      return {
        ...state,
        items: fixBackend(action.payload),
      };
    case DELETE_FILM:
      return {
        ...state,
        items: action.payload,
      };
    case CURRENT_ITEM:
      return {
        ...state,
        currentItem: getCurrentFilm(state.items, action.payload),
      };
    case MANAGED_ITEM:
      return {
        ...state,
        managedItem: getCurrentFilm(state.items, action.payload),
      };
    case POPUP:
      return {
        ...state,
        popup: action.payload,
      };
    case SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };
    case SORT_ORDER:
      return {
        ...state,
        sortOrder: action.payload,
      };
    case GENRES_FILTER:
      return {
        ...state,
        genresFilter: action.payload,
      };
    case FILMS_NUMBER:
      return {
        ...state,
        filmsNumber: action.payload.length,
      };
    default:
      return state;
  }
}
