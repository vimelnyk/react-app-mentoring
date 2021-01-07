import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Header from './header';
import Intro from './intro';
import Footer from './footer';
import Main from './main';
import Page404 from './page-404';
import EditPopupIntro from './edit-popup-intro';
import DeletePopupIntro from './delete-popup-intro';

function App({ showPopup }) {
  return (
    <Router>
      <Switch>
        <Route path="/(|search|film)/">
          <Header />
          <Intro />
          <Main />
          <Footer />
          {showPopup === 'editMovie' && <EditPopupIntro />}
          {showPopup === 'deleteMovie' && <DeletePopupIntro />}
        </Route>
        <Route path="*">
          <Header />
          <Page404 />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  showPopup: state.films.popup,
});
export default connect(mapStateToProps)(App);
App.propTypes = {
  showPopup: PropTypes.string.isRequired,
};
