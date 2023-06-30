import React, { useState } from 'react';
import './Registration.css'
import './FacItems.css'
import { Link } from 'react-router-dom';

interface FacItemProps {
  imageSrc: string;
  altText: string;
  facTitle: string;
  description: string;
  imgTitle: string;
  isWhiteTheme: boolean;
  selectedImage: string | null;
  setSelectedImage: (image: string | null) => void;
  handleLogin: () => void;
}

const FacItems: React.FC<FacItemProps> = ({
  imageSrc,
  altText,
  facTitle,
  description,
  isWhiteTheme,
  imgTitle,
  selectedImage,
  setSelectedImage,
  handleLogin
}) => {
  const [showDescription, setShowDescription] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleMouseDown = () => {
    setIsButtonActive(true);
  };

  const handleMouseUp = () => {
    setIsButtonActive(false);
  };

  const handleMouse = () => {
    setShowDescription(true);
  };

  const handleImageClick = () => {
    if (selectedImage === imgTitle) {
      setSelectedImage(null);
    } else {
      setSelectedImage(imgTitle);
    }
  };

  return (
    <div>
      <div
        className={`fac-items ${isWhiteTheme ? "white-theme" : "award-items-dark-theme"}`}
        onClick={handleMouse}
      >
        <img
          src={imageSrc}
          alt={altText}
          className={selectedImage === imgTitle ? "fac-image selected" : "fac-image"}
          onClick={handleImageClick}
        />
      </div>
      {showDescription && selectedImage === imgTitle && (
        <div className='fac-description'>
          <h1 className='fac-title'>{facTitle}</h1>
          <p className='fac-description-text'>{description}</p>
          <Link to={"/"}>
            <button 
              className={`enter-button ${isButtonActive  ? 'active' : ''}`}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onClick={handleLogin}
            >
              Приєднатися
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default FacItems
