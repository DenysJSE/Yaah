import './Main.css';
import '../../App.css'

interface HeaderProps {
  isWhiteTheme: boolean;
}

function Main({isWhiteTheme}: HeaderProps) {
  return (
    <div className={`page ${isWhiteTheme ? '' : 'main-page-dark-theme'}`}>
      <h1>It is Main</h1>
    </div>
  )
}

export default Main
