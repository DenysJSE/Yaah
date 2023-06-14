import './Missions.css';
import Star from '.././../images/star.png'
import Diamond from '.././../images/diamond.png'
import Coins from '.././../images/coin.png'
import Scroll from '.././../images/scroll.png';

interface MissionsProps {
  isWhiteTheme: boolean;
  isLogin: boolean;
}

function Missions({ isWhiteTheme, isLogin}: MissionsProps) {
  return (
    <div className={`missions ${isWhiteTheme ? '' : 'missions-dark-theme'}`}>
      <h2 className='missions-title'>Місії</h2>
      {isLogin ? (
        <div className='missions-list'>
          <div className='missions-list-item'>
            <img src={Star} alt="missions-img" className='missions-logo'/>
            <span className='mission-title'>Отримати 10 рейтингу</span>
            <div className='mission-progres'>
              <span className='progress-span'>3 / 10</span>
              <div className='mission-progres-passed'>
                <div className='mission-progres-passed-blick'></div>
              </div>
            </div>
          </div>
          <div className='missions-list-item'>
            <img src={Diamond} alt="missions-img" className='missions-logo'/>
            <span className='mission-title'>Отримати 20 діамантів</span>
            <div className='mission-progres'>
              <span className='progress-span'>15 / 20</span>
              <div className='mission-progres-passed diamonds'>
                <div className='mission-progres-passed-blick'></div>
              </div>
            </div>
          </div>
          <div className='missions-list-item'>
            <img src={Coins} alt="missions-img" className='missions-logo'/>
            <span className='mission-title'>Отримати 100 денаріїв</span>
            <div className='mission-progres'>
              <span className='progress-span'>100 / 100</span>
              <div className='mission-progres-passed coins'>
                <div className='mission-progres-passed-blick'></div>
              </div>
            </div>
          </div>
          <div className='missions-list-item'>
            <img src={Scroll} alt="missions-img" className='missions-logo'/>
            <span className='mission-title'>Отримати 2 сувої</span>
            <div className='mission-progres'>
              <span className='progress-span'>1 / 2</span>
              <div className='mission-progres-passed scrolls'>
                <div className='mission-progres-passed-blick'></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className='missions-text-isnotlogin'>Ти отримаєш свої місії після того як ввійдеш в академію</p>
        
      )}
      
    </div>
  )
}

export default Missions
