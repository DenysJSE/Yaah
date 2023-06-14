import { useContext, useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header/Header.tsx'
import MainMenu from './components/MainMenu/MainMenu.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/MainPage/Main.tsx';
import Academy from './components/Academy/Academy.tsx';
import PageNotFound from './components/PageNotFound/PageNotFound.tsx';
import Login from './components/Login/Login.tsx';
import UserCab from './components/UserCab/UserCab.tsx';
import Lab from './components/Lab/Lab.tsx';
import Leagues from './components/Leagues/Leagues.tsx';
import Shop from './components/Shop/Shop.tsx';
import Email from './components/Email/Email.tsx';
import Info from './components/Info/Info.tsx';
import Settings from './components/Settings/Settings.tsx';
import { ThemeContext } from './store/ThemeComponentProvider.tsx';
import Missions from './components/Missions/Missions.tsx';

function App() {
  const [isWhiteTheme, setIsWhiteTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'light' : true;
  });
  const { toggleTheme } = useContext(ThemeContext);
  const [isLogin, setIsLogin] = useState(() => {
    const savedIsLogin = localStorage.getItem('isLogin');
    return savedIsLogin ? savedIsLogin === 'true' : false;
  });
  const [lastLoginTime, setLastLoginTime] = useState(() => {
    const savedTime = localStorage.getItem('lastLoginTime');
    return savedTime ? Number(savedTime) : null;
  });

  const handleThemeChange = () => {
    setIsWhiteTheme((prevTheme) => {
      const newTheme = !prevTheme;
      localStorage.setItem('theme', newTheme ? 'light' : 'dark');
      toggleTheme();
      return newTheme;
    });
  };

  const handleLogin = () => {
    setIsLogin(true);
    localStorage.setItem('isLogin', 'true');
    localStorage.setItem('lastLoginTime', String(Date.now()));
  };

  const handleLogout = () => {
    setIsLogin(false);
    localStorage.setItem('isLogin', 'false');
    localStorage.removeItem('lastLoginTime');
  };

  useEffect(() => {
    const ONE_DAY = 24 * 60 * 60 * 1000;
    const currentTime = Date.now();

    const checkLoginTimeout = () => {
      if (lastLoginTime && currentTime - lastLoginTime >= ONE_DAY) {
        setIsLogin(false);
        localStorage.setItem('isLogin', 'false');
        localStorage.removeItem('lastLoginTime');
      }
    };

    const handlePageVisibilityChange = () => {
      if (!document.hidden) {
        if (lastLoginTime && currentTime - lastLoginTime >= ONE_DAY) {
          setIsLogin(false);
          localStorage.setItem('isLogin', 'false');
          localStorage.removeItem('lastLoginTime');
        } else {
          setLastLoginTime(currentTime);
          localStorage.setItem('lastLoginTime', String(currentTime));
        }
      }
    };

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      localStorage.setItem('lastLoginTime', String(currentTime));
      event.preventDefault();
    };

    checkLoginTimeout();

    document.addEventListener('visibilitychange', handlePageVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('visibilitychange', handlePageVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [lastLoginTime]);

  return (
    <BrowserRouter>
      <>
        <Header isWhiteTheme={isWhiteTheme} />
        <MainMenu 
          isWhiteTheme={isWhiteTheme} 
          handleThemeChange={handleThemeChange} 
          isLogin={isLogin} 
          handleLogin={handleLogin}
          handleLogout={handleLogout}
        />
        <Missions 
          isWhiteTheme={isWhiteTheme}
          isLogin={isLogin}  
        />
          <div className='content'>
            <Routes>
              <Route path='/' element={<Main isWhiteTheme={isWhiteTheme} />} />
              <Route 
                path='login' 
                element={<Login 
                  isWhiteTheme={isWhiteTheme}
                  handleLogin={handleLogin}
                />} 
              />
              <Route path='academy' element={<Academy isWhiteTheme={isWhiteTheme} />} />
              <Route path='lab' element={<Lab isWhiteTheme={isWhiteTheme} />} />
              <Route path='league' element={<Leagues isWhiteTheme={isWhiteTheme} />} />
              <Route path='shop' element={<Shop isWhiteTheme={isWhiteTheme} />} />
              <Route path='email' element={<Email isWhiteTheme={isWhiteTheme} />} />
              <Route path='info' element={<Info isWhiteTheme={isWhiteTheme} />} />
              <Route path='user-cab' element={<UserCab isWhiteTheme={isWhiteTheme} />} />
              <Route path='settings' element={<Settings isWhiteTheme={isWhiteTheme} />} />
              <Route path='*' element={<PageNotFound isWhiteTheme={isWhiteTheme} />} />
            </Routes>
          </div>
      </>
    </BrowserRouter>
  )
}

export default App
