import React, { useState, useEffect } from 'react';
import Header from './header';
import Intro from './intro';
import Footer from './footer';
import Main from './main';
import AddPopupIntro from './add-popup-intro';
import EditPopupIntro from './edit-popup-intro';
import DeletePopupIntro from './delete-popup-intro';

function App() {
  const [items, setItems] = useState([]);
  const [showPopup, setShowPopup] = useState('');
  const [currentItem, setCurrentItem] = useState('');
  const [currentItemFull, setCurrentItemFull] = useState({});

  const getCurrentFilm = (id) => {
    const arr = items.filter((item) => item.id === id);
    return arr[0];
  };

  async function fetchData() {
    const res = await fetch('http://localhost:4000/movies');
    res
      .json()
      .then((result) => setItems(result.data))
      .catch((err) => {
        console.log(err);
        setItems([]);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const openPopup = (value) => {
    setShowPopup(value);
  };

  const closePopup = () => {
    setShowPopup('');
  };

  const resetForm = () => {
    closePopup();
  };

  const submitForm = () => {
    closePopup();
  };

  const changeCurrentItem = (id) => {
    setCurrentItem(id);
    setCurrentItemFull(getCurrentFilm(id));
  };

  return (
    <>
      <Header
        openPopup={openPopup}
        changeCurrentItem={changeCurrentItem}
        currentItem={currentItem}
      />
      <Intro
        currentItem={currentItem}
        currentItemFull={currentItemFull}
      />
      <Main
        openPopup={openPopup}
        items={items}
        openDeletePopup={openPopup}
        changeCurrentItem={changeCurrentItem}
      />
      <Footer />
      {showPopup === 'addMovie' && (
        <AddPopupIntro
          closePopup={closePopup}
          resetForm={resetForm}
          submitForm={submitForm}
        />
      )}
      {showPopup === 'editMovie' && (
        <EditPopupIntro
          closePopup={closePopup}
          resetForm={resetForm}
          submitForm={submitForm}
        />
      )}
      {showPopup === 'deleteMovie' && (
        <DeletePopupIntro closePopup={closePopup} />
      )}
    </>
  );
}

export default App;
