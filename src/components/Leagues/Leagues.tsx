import './Leagues.css'

interface HeaderProps {
  isWhiteTheme: boolean;
}

function Lab({isWhiteTheme}: HeaderProps) {
  return (
    <div className={`leagues ${isWhiteTheme ? '' : 'leagues-dark-theme'}`}>
      <h1 className='text'>It is League</h1>
    </div>
  )
}

export default Lab