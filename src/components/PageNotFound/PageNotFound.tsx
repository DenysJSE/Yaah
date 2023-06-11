import './PageNotFound.css';

interface HeaderProps {
  isWhiteTheme: boolean;
}

function PageNotFound({isWhiteTheme}: HeaderProps) {
  return (
    <div className={`page-not-found ${isWhiteTheme ? '' : 'page-not-found-dark-theme'}`}>
      <h1 className="text">Page is not found</h1>
    </div>
  )
}

export default PageNotFound
