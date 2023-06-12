import './Info.css';
import '../../App.css'


interface HeaderProps {
  isWhiteTheme: boolean;
}

function Info({isWhiteTheme}: HeaderProps) {
  return (
    <div className={`page ${isWhiteTheme ? '' : 'info-page-dark-theme'}`}>
      <h1>It is Info</h1>
    </div>
  )
}

export default Info
