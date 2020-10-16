import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import Intro from './intro';
import Footer from './footer';
import Main from './main';
import EditPopupIntro from './edit-popup-intro';
import DeletePopupIntro from './delete-popup-intro';

function App({ showPopup }) {
  return (
    <>
      <Header />
      <Intro />
      <Main />
      <Footer />
      {showPopup === 'editMovie' && (
      <EditPopupIntro />
      )}
      {showPopup === 'deleteMovie' && (
      <DeletePopupIntro />
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  showPopup: state.films.popup,
});
export default connect(mapStateToProps)(App);
