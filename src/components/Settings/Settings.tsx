import './Setting.css'
import '../../App.css'

interface HeaderProps {
  isWhiteTheme: boolean;
}

function Settings({isWhiteTheme}: HeaderProps) {
  return (
    <div className={`page ${isWhiteTheme ? '' : 'settings-dark-theme'}`}>
      <h1>It is Settings</h1>
    </div>
  )
}

export default Settings
