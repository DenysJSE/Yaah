import './UserCab.css';
import '../../App.css'

interface HeaderProps {
  isWhiteTheme: boolean;
}

function Lab({isWhiteTheme}: HeaderProps) {
  return (
    <div className={`page ${isWhiteTheme ? '' : 'user-cab-dark-theme'}`}>
      <h1>It is UserCab</h1>
    </div>
  )
}

export default Lab