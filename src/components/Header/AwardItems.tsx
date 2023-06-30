import {useState} from 'react'
import './Header.css'


interface AwardItemProps {
  imageSrc: string;
  altText: string;
  awardText: string;
  description: string;
  isWhiteTheme: boolean;
}

const AwardItems: React.FC<AwardItemProps> = ({
  imageSrc,
  altText,
  awardText,
  description,
  isWhiteTheme
}) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleMouseEnter = () => {
    setShowDescription(true);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
  };

  return (
    <div
      className={`award-items ${isWhiteTheme ? 'white-theme' : 'award-items-dark-theme'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={imageSrc} alt={altText} className="header-img" />
      <h3 className="award-items-text">{awardText}</h3>
      {showDescription && (
        <div className={`award-description ${isWhiteTheme ? 'white-theme' : 'award-description-dark-theme'}`}>
          <span className={`description-space ${isWhiteTheme ? 'white-theme' : 'description-space-dark-theme'}`}>s</span>
          <p className='description-text'>{description}</p>
          <div className='more-information'>
            <a href="/info" className='more-information-link'>Детальніше</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default AwardItems
