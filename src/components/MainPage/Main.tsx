import './Main.css';

interface HeaderProps {
  isWhiteTheme: boolean;
}

function Main({isWhiteTheme}: HeaderProps) {
  return (
    <div className={`main-page ${isWhiteTheme ? '' : 'main-page-dark-theme'}`}>
      <h1 className='text'>It is Main</h1>
    </div>
  )
}

export default Main
