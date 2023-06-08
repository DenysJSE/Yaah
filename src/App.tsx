import { useState } from 'react';
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

function App() {
  const [isWhiteTheme, setIsWhiteTheme] = useState(true);

  const handleThemeChange = () => {
    setIsWhiteTheme(!isWhiteTheme);
  };

  return (
    <BrowserRouter>
      <>
        <Header isWhiteTheme={isWhiteTheme} />
        <MainMenu isWhiteTheme={isWhiteTheme} handleThemeChange={handleThemeChange} />
          <div className='content'>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='login' element={<Login />} />
              <Route path='academy' element={<Academy />} />
              <Route path='lab' element={<Lab />} />
              <Route path='league' element={<Leagues />} />
              <Route path='shop' element={<Shop />} />
              <Route path='email' element={<Email />} />
              <Route path='info' element={<Info />} />
              <Route path='user-cab' element={<UserCab />} />
              <Route path='settings' element={<Settings />} />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </div>
      </>
    </BrowserRouter>
  )
}

export default App
