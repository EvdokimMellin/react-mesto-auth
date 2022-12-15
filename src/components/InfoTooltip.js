import React from 'react';
import successImage from '../images/success.svg';
import failImage from '../images/fail.svg';

export default function InfoTooltip (props) {
  function closeByOverlay (evt) {
    if (evt.target.classList.contains('popup')) {
      props.onClose();
    }
  }

  if (props.res === 'ok') {
    return (
      <div className="popup popup_type_image popup_opened" onClick={closeByOverlay}>
        <div className="popup__info-container">
          <button className="popup__close-button" onClick={props.onClose}></button>
          <img alt="Успех" src={successImage} className="popup__info-image" />
          <p className="popup__info-text">Вы успешно зарегистрировались!</p>
        </div>
      </div>
    )
  } else if (props.res === 'fail') {return (
      <div className="popup popup_type_image popup_opened" onClick={closeByOverlay}>
        <div className="popup__info-container">
          <button className="popup__close-button" onClick={props.onClose}></button>
          <img alt="Ошибка" src={failImage} className="popup__info-image" />
          <p className="popup__info-text">Что-то пошло не так! Попробуйте ещё раз.</p>
        </div>
      </div>
  )}
}
