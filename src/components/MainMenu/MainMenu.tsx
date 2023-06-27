import {useState, useEffect  } from 'react'
import { Link, useLocation  } from "react-router-dom";
import './MainMenu.css'
import AcademyLogo from '../../images/academy.png'
import LabLogo from '../../images/lab.png'
import LeagueLogo from '../../images/league.png'
import ShopLogo from '../../images/shops.png'
import EmailLogo from '../../images/email.png'
import InfoLogo from '../../images/info.png'
import ChangeTheme from '../../images/change-theme.png'
import UserAccount from '../../images/user.png'
import Options from '../../images/options.png'
import Exit from '../../images/logout.png'

interface MainMenuProps {
  isWhiteTheme: boolean;
  isLogin: boolean;
  handleThemeChange: () => void;
  handleLogin: () => void;
  handleLogout: () => void;
}

function MainMenu({ isWhiteTheme, handleThemeChange, isLogin, handleLogin, handleLogout }: MainMenuProps) {

  const [activeItem, setActiveItem] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    setActiveItem(pathname);
  }, [location]);

  const getItemNavbarClass = (itemName: string) => {
    const baseClass = `navbar-item ${isWhiteTheme ? 'white-theme' : 'navbar-item-dark-theme'}`;
    const activeClass = isWhiteTheme ? 'link-active' : 'link-active-dark-theme';
    return activeItem === itemName ? `${baseClass} ${activeClass}` : baseClass;
  };

  const getItemUserOptionsClass = (itemName: string) => {
    const baseClass = `user-options-item ${isWhiteTheme ? 'white-theme' : 'user-options-item-dark-theme'}`;
    const activeClass = isWhiteTheme ? 'user-link-active' : 'user-link-active-dark-theme';
    return activeItem === itemName ? `${baseClass} ${activeClass} user-link-active` : baseClass;
  };

  return (
    <div className={`main-menu ${isWhiteTheme ? 'white-theme' : 'main-menu-dark-theme'}`}>
      <div className="navbar">
        <ul className='navbar-ul'>
          <Link to="/academy" className={`link ${isWhiteTheme ? 'white-theme' : 'link-dark-theme'}`}>
            <div className={getItemNavbarClass('/academy')} onClick={() => setActiveItem('/academy')}>
              <img src={AcademyLogo} alt="AcademyLogo" className='navbar-logo' />
              <li className='navbar-li'>Академія</li>
            </div>
          </Link>
          <Link to="/lab" className={`link ${isWhiteTheme ? 'white-theme' : 'link-dark-theme'}`}>
            <div className={getItemNavbarClass('/lab')} onClick={() => setActiveItem('/lab')}>
              <img src={LabLogo} alt="LabLogo" className='navbar-logo' />
              <li className='navbar-li'>Лабораторія</li>
            </div>
          </Link>
          <Link to="/league" className={`link ${isWhiteTheme ? 'white-theme' : 'link-dark-theme'}`}>
            <div className={getItemNavbarClass('/league')} onClick={() => setActiveItem('/league')}>
              <img src={LeagueLogo} alt="LeagueLogo" className='navbar-logo' />
              <li className='navbar-li'>Конфедерація</li>
            </div>
          </Link>
          <Link to="/shop" className={`link ${isWhiteTheme ? 'white-theme' : 'link-dark-theme'}`}>
            <div className={getItemNavbarClass('/shop')} onClick={() => setActiveItem('/shop')}>
              <img src={ShopLogo} alt="ShopLogo" className='navbar-logo' />
              <li className='navbar-li'>Склеп</li>
            </div>
          </Link>
          <Link to="/email" className={`link ${isWhiteTheme ? 'white-theme' : 'link-dark-theme'}`}>
            <div className={getItemNavbarClass('/email')} onClick={() => setActiveItem('/email')}>
              <img src={EmailLogo} alt="EmailLogo" className='navbar-logo' />
              <li className='navbar-li'>Пошта</li>
            </div>
          </Link>
          <Link to="/info" className={`link ${isWhiteTheme ? 'white-theme' : 'link-dark-theme'} info`}>
            <div className={getItemNavbarClass('/info')} onClick={() => setActiveItem('/info')}>
              <img src={InfoLogo} alt="InfoLogo" className='navbar-logo' />
              <li className='navbar-li'>Довідник</li>
            </div>
          </Link>
        </ul>
      </div>
      <div className='user-options'>
        <ul className='user-options-ul'>
          <div className={`user-options-item ${isWhiteTheme ? 'white-theme' : 'user-options-item-dark-theme'}`} onClick={handleThemeChange}>
            <img src={ChangeTheme} alt="AcademyLogo" className='user-options-logo' />
            <li className='user-options-li'>{isWhiteTheme ? 'Змінити день' : 'Змінити ніч'}</li>
          </div>
          {isLogin ? (
            <Link to="/user-cab" className={`link ${isWhiteTheme ? 'white-theme' : 'link-dark-theme'}`}>
              <div className={getItemUserOptionsClass('/user-cab')} onClick={() => {
                setActiveItem('/user-cab');
                handleLogin();
              }}>
                <img src={UserAccount} alt="AcademyLogo" className='user-options-logo' />
                <li className='user-options-li'>Робітня</li>
              </div>
            </Link>
          ) : (
            <Link to="/login" className={`link ${isWhiteTheme ? 'white-theme' : 'link-dark-theme'}`}>
              <div className={getItemUserOptionsClass('/login-form')} onClick={() => setActiveItem('/login-form')}>
                <img src={UserAccount} alt="AcademyLogo" className='user-options-logo' />
                <li className='user-options-li'>Приєднатися</li>
              </div>
            </Link>
          )}
          {isLogin && <Link to="/settings" className={`link ${isWhiteTheme ? 'white-theme' : 'link-dark-theme'}`}>
          <div className={getItemUserOptionsClass('/settings')} onClick={() => setActiveItem('/settings')}>
            <img src={Options} alt="AcademyLogo" className='user-options-logo' />
            <li className='user-options-li'>Налаштування</li>
          </div>
          </Link>}
          {isLogin && <Link to="/" className={`link ${isWhiteTheme ? 'white-theme' : 'link-dark-theme'}`}>
            <div 
              className={`user-options-item ${isWhiteTheme ? 'white-theme' : 'user-options-item-dark-theme'}`}
              onClick={handleLogout}
            >
              <img src={Exit} alt="AcademyLogo" className='user-options-logo' />
              <li className='user-options-li'>Вийти</li>
            </div>
          </Link>}
        </ul>
      </div>
    </div>
  )
}

export default MainMenu
