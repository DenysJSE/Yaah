import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import '../../App.css'

interface LoginProps {
  isWhiteTheme: boolean;
  handleLogin: () => void;
}

function Lab({ isWhiteTheme, handleLogin}: LoginProps) {

  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleMouseDown = () => {
    setIsButtonActive(true);
  };

  const handleMouseUp = () => {
    setIsButtonActive(false);
  };

  return (
    <div className={`page ${isWhiteTheme ? '' : 'login-dark-theme'}`}>
      <h1>It is Login</h1>
      <Link to={"/"}>
        <button 
          className={`enter-button ${isButtonActive  ? 'active' : ''}`}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onClick={handleLogin}
        >
          Ввійти
        </button>
      </Link>
    </div>
  )
}

export default Lab