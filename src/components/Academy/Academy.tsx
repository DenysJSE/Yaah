import './Academy.css'

interface HeaderProps {
  isWhiteTheme: boolean;
}

function Academy({isWhiteTheme}: HeaderProps) {
  return (
    <div className={`academy ${isWhiteTheme ? '' : 'academy-dark-theme'}`}>
      <h1 className='text'>It is Academy</h1>
    </div>
  )
}

export default Academy
