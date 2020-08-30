import React from 'react';
import Header from './header';
import Intro from './intro';
import Footer from './footer';
import Main from './main';
import Popup from './popup';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
    };
  }

  openPopup(value) {
    this.setState({ showPopup: value });
  }

  closePopup() {
    this.setState({
      showPopup: false,
    });
  }

  resetForm() {
    this.closePopup();
  }

  submitForm() {
    this.closePopup();
  }

  render() {
    const { showPopup } = this.state;
    return (
      <>
        <Header openPopup={() => this.openPopup('addMovie')} />
        <Intro />
        <Main
          openPopup={() => this.openPopup('editMovie')}
          openDeletePopup={() => this.openPopup('deleteMovie')}
        />
        <Footer />
        {showPopup !== false ? (
          <Popup
            closePopup={() => this.closePopup()}
            resetForm={() => this.resetForm()}
            submitForm={() => this.submitForm()}
            showPopup={showPopup}
          />
        ) : null}
      </>
    );
  }
}
export default App;
