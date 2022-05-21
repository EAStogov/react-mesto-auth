import succesLogo from '../images/succes.svg';
import failLogo from '../images/fail.svg';
import PopupWithForm from './PopupWithForm';
import { useNavigate } from 'react-router-dom';

const InfoTooltip = ({isSucces, isOpen, onClose}) => {
  const navigate = useNavigate();
  function closePopup() {
    onClose();
    if (isSucces) {
      navigate('/signin');
    }
  }
  return (
    <PopupWithForm isOpen={isOpen} name='infoToolTip' onClose={closePopup} isForSignUp={true}>
        <img src={isSucces ? succesLogo : failLogo } alt={isSucces ? 'Успешно' : 'Ошибка!'} className={'popup__sign-up-result'} />
        <p className='popup__sign-up-heading'>{ isSucces ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}</p>
    </PopupWithForm>
  )
}

export default InfoTooltip;