import './Email.css';

interface HeaderProps {
  isWhiteTheme: boolean;
}

function Email({isWhiteTheme}: HeaderProps) {
  return (
    <div className={`email-page ${isWhiteTheme ? '' : 'email-page-dark-theme'}`}>
      <h1 className='text'>It is Email</h1>
    </div>
  )
}

export default Email
