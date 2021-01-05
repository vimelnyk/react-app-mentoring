const convertSortType = (sortBy, filmItem) => {
  if (sortBy === 'release_date') {
    return Date.parse(filmItem);
  }
  return filmItem;
};
export default convertSortType;
