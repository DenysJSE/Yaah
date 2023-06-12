import './Lab.css';
import '../../App.css'


interface HeaderProps {
  isWhiteTheme: boolean;
}

function Lab({isWhiteTheme}: HeaderProps) {
  return (
    <div className={`page ${isWhiteTheme ? '' : 'lab-dark-theme'}`}>
      <h1>It is Lab</h1>
    </div>
  )
}

export default Lab
