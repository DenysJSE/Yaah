import './Setting.css'

interface HeaderProps {
  isWhiteTheme: boolean;
}

function Settings({isWhiteTheme}: HeaderProps) {
  return (
    <div className={`settings ${isWhiteTheme ? '' : 'settings-dark-theme'}`}>
      <h1 className='text'>It is Settings</h1>
    </div>
  )
}

export default Settings
