import './Lab.css';

interface HeaderProps {
  isWhiteTheme: boolean;
}

function Lab({isWhiteTheme}: HeaderProps) {
  return (
    <div className={`lab ${isWhiteTheme ? '' : 'lab-dark-theme'}`}>
      <h1 className='text'>It is Lab</h1>
    </div>
  )
}

export default Lab
