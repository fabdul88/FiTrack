import React from 'react';
import './modal.scss';
import close from '../../assets/icons/closeModal.svg';

const Modal = ({ deleteWorkout, setModalState, modalState }) => {
  console.log();
  return (
    <div className="modal">
      <div className="modal__window">
        <div className="modal__close-icon-container">
          <button
            className="modal__close-icon"
            onClick={() =>
              setModalState({ state: false, id: null, username: '' })
            }
          >
            <img src={close} alt="close modal" />
          </button>
        </div>
        <div>
          <h2 className="modal__window-title">
            Delete workout for{' '}
            <span className="modal__window-title-span">
              {modalState.username}
            </span>{' '}
          </h2>
          <p className="modal__window-text">
            Are you sure you want to delete this workout? This action is final
            and you will be unable to recover any data
          </p>
        </div>
        <div className="modal__button-container">
          <div className="modal__button-container-wrapper">
            <button
              className="modal__button-delete"
              onClick={() => {
                deleteWorkout(modalState.id);
                setModalState({ state: false, id: null, username: '' });
              }}
            >
              Delete
            </button>
            <button
              className="modal__button-cancel"
              onClick={() =>
                setModalState({ state: false, id: null, username: '' })
              }
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
