import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Registration.css'
import '../../App.css'

interface LoginProps {
  isWhiteTheme: boolean;
  handleLogin: () => void;
}

function Login({ isWhiteTheme, handleLogin}: LoginProps) {

  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleMouseDown = () => {
    setIsButtonActive(true);
  };

  const handleMouseUp = () => {
    setIsButtonActive(false);
  };

  return (
    <div className={`page ${isWhiteTheme ? '' : 'login-dark-theme'}`}>
      <h1 className="registration-title">Вхід</h1>
      <div className="registration-inputs">
        <div className="input-container">
          <input type="email" className="form-input" />
          <label className="form-label email-label">Email</label>
        </div>
        <div className="input-container">
          <input type="password" className="form-input" />
          <label className="form-label password-label">Пароль</label>
        </div>
      </div>
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

export default Login