import './Leagues.css';
import '../../App.css';

interface HeaderProps {
  isWhiteTheme: boolean;
}

function Lab({isWhiteTheme}: HeaderProps) {
  return (
    <div className={`page ${isWhiteTheme ? '' : 'leagues-dark-theme'}`}>
      <h1>It is League</h1>
    </div>
  )
}

export default Lab