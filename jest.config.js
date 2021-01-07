module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.js$": "babel-jest",
    ".+\\.(css|styl|less|sass|scss)$": "jest-transform-css",
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|scss)$": "identity-obj-proxy",
  },
  collectCoverageFrom: ["**/*.{ts,tsx}"],
  // for AC 4 - testing
  // "collectCoverageFrom": [
  //   'src/components/home/jumbotron/manage-movie/form/*.{ts,tsx}',
  //   'src/components/home/jumbotron/manage-movie/ManageMovieModal.tsx'
};
