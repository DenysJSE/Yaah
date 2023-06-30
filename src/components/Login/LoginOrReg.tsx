import { Link } from "react-router-dom"
import './LoginOrReg.css'

interface LoginProps {
  isWhiteTheme: boolean;
}

function LoginOrReg({isWhiteTheme}: LoginProps) {
  return (
    <div className={`page ${isWhiteTheme ? '' : 'login-dark-theme'}`}>
      <div className="login-options">
        <Link to="/registration" className="link">
          <div className="options-card">
              <h1 className="card-title">Реєстрація</h1>
          </div>
        </Link>
        <Link to="/login" className="link">
          <div className="options-card">
            <h1 className="card-title">Вхід</h1>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default LoginOrReg
