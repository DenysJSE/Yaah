import './Shop.css';

interface HeaderProps {
  isWhiteTheme: boolean;
}

function Lab({isWhiteTheme}: HeaderProps) {
  return (
    <div className={`shop ${isWhiteTheme ? '' : 'shop-dark-theme'}`}>
      <h1 className='text'>It is Shop</h1>
    </div>
  )
}

export default Lab