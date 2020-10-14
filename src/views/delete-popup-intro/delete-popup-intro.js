import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Popup from '../popup';
import './delete-popup-intro.scss';
import { deleteFilm } from '../../actions/filmActions';

const DeletePopupIntro = ({ closePopup, deleteFilm, filmId }) => {
  console.log(filmId);
  return (
    <Popup closePopup={closePopup}>
      <h2 className="heading mb-4">Delete Movie</h2>
      <p className="mb-4">Are you sure you want to delete this movie?</p>
      <div className="d-flex justify-content-end">
        <button
          type="button"
          className="bttn bttn--general"
          onClick={() => { deleteFilm(filmId); closePopup(); }}
        >
          Confirm
        </button>
      </div>
    </Popup>
  );
};

const mapStateToProps = (state) => ({
  filmId: state.films.currentItem.id,
});
export default connect(mapStateToProps, { deleteFilm })(DeletePopupIntro);

DeletePopupIntro.propTypes = {
  closePopup: PropTypes.func.isRequired,
};
