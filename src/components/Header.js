import headerLogo from '../images/logo.svg';
import { NavLink } from 'react-router-dom';

function Header({isLoggedIn, userEmail, authAction, onClick, route}) {
  return (
      <header className="header">
        <img src={headerLogo} alt="Место — Россия" className="header__logo" />
        <div className='header__auth'>
          {isLoggedIn && 
          <p className='header__email'>{userEmail}</p>}
          <NavLink to={route} onClick={onClick} type='text' className='header__link page__button'>{authAction}</NavLink>
        </div>
      </header>
  );
}

export default Header;