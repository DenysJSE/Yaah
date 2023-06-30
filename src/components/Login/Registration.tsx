import { useState } from "react";
import './Registration.css'
import Biology from '../../images/Biology.png'
import English from '../../images/English.png'
import History from '../../images/History.png'
import Geography from '../../images/Geography.png'
import Chemistry from '../../images/Chemistry.png'
import FacItems from "./FacItems";

interface RegistrationProps {
  isWhiteTheme: boolean;
  handleLogin: () => void;
}

function Registration({ isWhiteTheme, handleLogin}: RegistrationProps) {

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className={`page ${isWhiteTheme ? '' : 'login-dark-theme'}`}>
      <h1 className="registration-title">Реєстрація</h1>
      <div className="registration-inputs">
        <div className="input-container">
          <input type="text" className="form-input" />
          <label className="form-label name-label">Ім'я</label>
        </div>
        <div className="input-container">
          <input type="email" className="form-input" />
          <label className="form-label email-label">Email</label>
        </div>
        <div className="input-container">
          <input type="password" className="form-input" />
          <label className="form-label password-label">Пароль</label>
        </div>
      </div>
      <h1 className="registration-title fac">Оберіть Факультет</h1>
      <div className="fac-images">
        <FacItems
          imageSrc={Biology}
          altText="fac-img"
          facTitle="Faculta de Tila"
          description="Це факультет Біології!"
          isWhiteTheme={isWhiteTheme}
          imgTitle="Biology"
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          handleLogin={handleLogin}
        />
        <FacItems
          imageSrc={English}
          altText="fac-img"
          facTitle="Faculta de Slova"
          description="Це факультет Англійської!"
          isWhiteTheme={isWhiteTheme}
          imgTitle="English"
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          handleLogin={handleLogin}
        />
        <FacItems
          imageSrc={History}
          altText="fac-img"
          facTitle="Faculta de Lita"
          description="Це факультет Історії!"
          isWhiteTheme={isWhiteTheme}
          imgTitle="History"
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          handleLogin={handleLogin}
        />
        <FacItems
          imageSrc={Geography}
          altText="fac-img"
          facTitle="Faculta de Kray"
          description="Це факультет Географії!"
          isWhiteTheme={isWhiteTheme}
          imgTitle="Geography"
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          handleLogin={handleLogin}
        />
        <FacItems
          imageSrc={Chemistry}
          altText="fac-img"
          facTitle="Faculta de Bum"
          description="Це факультет Хімії!"
          isWhiteTheme={isWhiteTheme}
          imgTitle="Chemistry"
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          handleLogin={handleLogin}
        />
      </div>
    </div>
  )
}

export default Registration