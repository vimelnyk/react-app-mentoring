import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Popup from '../popup';
import './delete-popup-intro.scss';
import { deleteFilm } from '../../actions/filmActions';

const DeletePopupIntro = ({ deleteThisFilm, filmId }) => (
  <Popup>
    <h2 className="heading mb-4">Delete Movie</h2>
    <p className="mb-4">Are you sure you want to delete this movie?</p>
    <div className="d-flex justify-content-end">
      <button
        type="button"
        className="bttn bttn--general"
        onClick={() => {
          deleteThisFilm(filmId);
        }}
      >
        Confirm
      </button>
    </div>
  </Popup>
);

const mapStateToProps = (state) => ({
  filmId: state.films.managedItem.id,
});
export default connect(mapStateToProps, { deleteThisFilm: deleteFilm })(
  DeletePopupIntro,
);

DeletePopupIntro.propTypes = {
  deleteThisFilm: PropTypes.func.isRequired,
  filmId: PropTypes.number.isRequired,
};
