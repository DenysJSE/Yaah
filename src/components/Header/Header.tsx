import "./Header.css";
import RatingStar from '../../images/star.png'
import Diamonds from '../../images/diamond.png'
import Coins from '../../images/coin.png'
import Scrolles from '../../images/scroll.png'
import AwardItems from "./AwardItems";
import { Link } from "react-router-dom";

interface HeaderProps {
  isWhiteTheme: boolean;
}

function Header({ isWhiteTheme }: HeaderProps) {
  return (
    <div className={`header ${isWhiteTheme ? 'white-theme' : 'header-dark-theme'}`}>
      <div className='title'>
        <Link to="/" className="link">
          <h1 className={`title-text ${isWhiteTheme ? '' : 'title-text-dark-theme'}`}>Yaah</h1>
        </Link>
        
      </div>
      <div className="awards--options">
        <div className="awards">
          <AwardItems
            imageSrc={RatingStar}
            altText="rate"
            awardText="1500"
            description="Рейтинг - одиниця, яку ти отримуєш за проходження уроків та тестів. Більший рейтинг - вище звання!"
            isWhiteTheme={isWhiteTheme}
          />
          <AwardItems
            imageSrc={Diamonds}
            altText="diamonds"
            awardText="500"
            description="Діаманти - одиниця, яку ти отримуєш за проходження уроків та тестів. Ти можеш їх використати, щоб спростити проходження тестів (використати підказку, збільшити час, тощо)."
            isWhiteTheme={isWhiteTheme}
          />
          <AwardItems
            imageSrc={Coins}
            altText="coins"
            awardText="10 500"
            description="Карбованці - одиниця, яку ти отримуєш за проходження уроків та тестів. Ти можеш їх використати, щоб купити діаманти, зустріч з Ректором, тижневу газету, тощо."
            isWhiteTheme={isWhiteTheme}
          />
          <AwardItems
            imageSrc={Scrolles}
            altText="scroll"
            awardText="10"
            description="Сувої - одиниця, яку ти отримуєш за підвищення ліги. Ти можеш їх використати, щоб відкрити певний урок, якщо ти хочеш його пройти якнайшвидше."
            isWhiteTheme={isWhiteTheme}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
