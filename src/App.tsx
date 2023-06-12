import { useContext, useState } from 'react';
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

function App() {
  const [isWhiteTheme, setIsWhiteTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'light' : true;
  });
  const { toggleTheme } = useContext(ThemeContext);
  const [isLogin, setIsLogin] = useState(false);

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
  }

  const handleLogout = () => {
    setIsLogin(false);
  }

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
