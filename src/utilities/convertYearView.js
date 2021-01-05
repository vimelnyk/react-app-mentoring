const convertYearView = (releaseDate) => {
  if (releaseDate && releaseDate.length) {
    return releaseDate.substr(0, 4);
  }
  return 'N/a';
};

export default convertYearView;
