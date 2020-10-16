import {
  FETCH_FILMS,
  DELETE_FILM, NEW_FILM,
  CURRENT_ITEM,
  MANAGED_ITEM,
  POPUP,
} from '../actions/types';

const initialState = {
  items: [],
  item: {},
  currentItem: {},
  managedItem: {},
  popup: '',
};

const getCurrentFilm = (state, id) => {
  if (id === '') {
    return {};
  }
  const arr = state.filter((item) => item.id === id);
  return arr[0];
};

const fixBackend = (state) => state.reverse().slice(0, 10);

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_FILMS:
      console.log(action.payload);
      return {
        ...state,
        items: fixBackend(action.payload),
      };
    case NEW_FILM:
      return {
        ...state,
        item: action.payload,
      };
    case DELETE_FILM:
      console.log(action.payload);
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
    default:
      return state;
  }
}
