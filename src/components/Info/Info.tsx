import './Info.css';

interface HeaderProps {
  isWhiteTheme: boolean;
}

function Info({isWhiteTheme}: HeaderProps) {
  return (
    <div className={`info-page ${isWhiteTheme ? '' : 'info-page-dark-theme'}`}>
      <h1 className='text'>It is Info</h1>
    </div>
  )
}

export default Info
