import './Shop.css';
import '../../App.css'


interface HeaderProps {
  isWhiteTheme: boolean;
}

function Lab({isWhiteTheme}: HeaderProps) {
  return (
    <div className={`page ${isWhiteTheme ? '' : 'shop-dark-theme'}`}>
      <h1>It is Shop</h1>
    </div>
  )
}

export default Lab