import React from 'react';
import './delete-popup-intro.scss';

const DeletePopupIntro = () => (
  <>
    <h2 className="heading">Delete Movie</h2>
    <p>Are you sure you want to delete this movie?</p>
    <div className="d-flex justify-content-end">
      <button type="button" className="bttn bttn--general">Confirm</button>
    </div>
  </>

);

export default DeletePopupIntro;
