import React from 'react';
import Header from './header';
import Intro from './intro';
import Footer from './footer';
import Main from './main';
import AddPopupIntro from './add-popup-intro';
import EditPopupIntro from './edit-popup-intro';
import DeletePopupIntro from './delete-popup-intro';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      showPopup: '',
    };
  }

  componentDidMount() {
    fetch('/mock/film-mock.json')
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          items: result.data,
        });
        console.log(result);
      })
      .catch((error) => {
        this.setState({
          items: [],
        });
        console.log(error);
      });
  }

  openPopup(value) {
    this.setState({ showPopup: value });
  }

  closePopup() {
    this.setState({
      showPopup: '',
    });
  }

  resetForm() {
    this.closePopup();
  }

  submitForm() {
    this.closePopup();
  }

  render() {
    const { showPopup, items } = this.state;
    return (
      <>
        <Header openPopup={() => this.openPopup('addMovie')} />
        <Intro />
        <Main
          openPopup={() => this.openPopup('editMovie')}
          items={items}
          openDeletePopup={() => this.openPopup('deleteMovie')}
        />
        <Footer />

        {showPopup === 'addMovie' && (
          <AddPopupIntro
            closePopup={() => this.closePopup()}
            resetForm={() => this.resetForm()}
            submitForm={() => this.submitForm()}
          />
        )}
        {showPopup === 'editMovie' && (
          <EditPopupIntro
            closePopup={() => this.closePopup()}
            resetForm={() => this.resetForm()}
            submitForm={() => this.submitForm()}
          />
        )}
        {showPopup === 'deleteMovie' && (
          <DeletePopupIntro closePopup={() => this.closePopup()} />
        )}
      </>
    );
  }
}
export default App;
