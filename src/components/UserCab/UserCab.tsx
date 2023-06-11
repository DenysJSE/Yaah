import './UserCab.css';

interface HeaderProps {
  isWhiteTheme: boolean;
}

function Lab({isWhiteTheme}: HeaderProps) {
  return (
    <div className={`user-cab ${isWhiteTheme ? '' : 'user-cab-dark-theme'}`}>
      <h1 className="text">It is UserCab</h1>
    </div>
  )
}

export default Lab