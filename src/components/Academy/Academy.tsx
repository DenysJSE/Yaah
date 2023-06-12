import './Academy.css'
import '../../App.css'

interface HeaderProps {
  isWhiteTheme: boolean;
}

function Academy({isWhiteTheme}: HeaderProps) {
  return (
    <div className={`page ${isWhiteTheme ? '' : 'academy-dark-theme'}`}>
      <h1>It is Academy</h1>
    </div>
  )
}

export default Academy
