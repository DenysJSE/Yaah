import './PageNotFound.css';
import '../../App.css'

interface HeaderProps {
  isWhiteTheme: boolean;
}

function PageNotFound({isWhiteTheme}: HeaderProps) {
  return (
    <div className={`page ${isWhiteTheme ? '' : 'page-not-found-dark-theme'}`}>
      <h1>Page is not found</h1>
    </div>
  )
}

export default PageNotFound
