import headerLogo from '../images/logo.svg';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Header({isLoggedIn, userEmail, authAction, onClick, route}) {
  const [isShown, setIsShoun] = useState(false);
  function toggleVisibility() {
    setIsShoun(!isShown);
  }
  return (
      <header className={`header ${isShown && 'header_full'}`}>
        <div className='header__container'>
          <img src={headerLogo} alt="Место — Россия" className="header__logo" />
          <button onClick={toggleVisibility} className={`page__button header__burger ${isShown && 'header__burger_cross-icon'}`}></button>
        </div>
        <div className={`header__auth ${isShown && 'header__auth_shown'}`}>
          {isLoggedIn && 
          <p className='header__email'>{userEmail}</p>}
          <NavLink to={route} onClick={onClick} type='text' className='header__link page__button'>{authAction}</NavLink>
        </div>
      </header>
  );
}

export default Header;