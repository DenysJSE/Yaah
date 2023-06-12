import './Email.css';
import '../../App.css'

interface HeaderProps {
  isWhiteTheme: boolean;
}

function Email({isWhiteTheme}: HeaderProps) {
  return (
    <div className={`page ${isWhiteTheme ? '' : 'email-page-dark-theme'}`}>
      <h1>It is Email</h1>
    </div>
  )
}

export default Email
