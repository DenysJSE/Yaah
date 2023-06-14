import './Main.css';
import '../../App.css'
import UserLogo from '../../images/photo_2023-04-20_14-25-32.jpg'
import Award1 from '../../images/Award1.png'
import Award2 from '../../images/Award2.png'
import Award3 from '../../images/Award3.png'

interface HeaderProps {
  isWhiteTheme: boolean;
}

function Main({isWhiteTheme}: HeaderProps) {
  return (
    <div className={`page ${isWhiteTheme ? '' : 'main-page-dark-theme'}`}>
      <div className='mane-page'>
        <div className='user-description'>
          <div className='user-logo-item'>
            <img src={UserLogo} alt="user-logo" className='user-logo' />
          </div>
          <div className='user-description-item'>
            <div className='user-name'>
              <h2>DenysMut</h2>
            </div>
            <div className='user-facultet'>
              <h2>Факультет: <span className='user-description-span'>Faculta de Lita</span></h2>
            </div>
            <div className='user-rank'>
              <h2>Звання: <span className='user-description-span'>Шукач</span></h2>
            </div>
          </div>
        </div>
        <div className='user-awards'>
          <h2 className='awards-title'>Нагороди</h2>
          <div className='awards-icons'>
            <img src={Award1} alt="award1" className='award-icon'/>
            <img src={Award2} alt="award2" className='award-icon'/>
            <img src={Award3} alt="award3" className='award-icon'/>
            <img src={Award1} alt="award4" className='award-icon'/>
            <img src={Award2} alt="award5" className='award-icon'/>
            <img src={Award3} alt="award6" className='award-icon'/>
            <img src={Award1} alt="award7" className='award-icon'/>
            <img src={Award2} alt="award8" className='award-icon'/>
          </div>
          <p className='more-awards'>Всі нагороди...</p>
        </div>
        <div className='statistic-news'>
          <div className="statistic">
            <h2 className='awards-title'>Прогрес</h2>
            <div className='award-list-item'>
              <span className='award-title'>Пройдено уроків</span>
              <div className='award-progres'>
                <span className='award-progress-span'>23 / 100</span>
                <div className='award-progres-passed'>
                  <div className='award-progres-passed-blick'></div>
                </div>
              </div>
            </div>
            <div className='award-list-item'>
              <span className='award-title'>Пройдено тестів</span>
              <div className='award-progres'>
                <span className='award-progress-span'>21 / 100</span>
                <div className='award-progres-passed tests'>
                  <div className='award-progres-passed-blick'></div>
                </div>
              </div>
            </div>
            <div className='award-list-item'>
              <span className='award-title'>Тести складені з 1 разу</span>
              <div className='award-progres'>
                <span className='award-progress-span'>18 / 21</span>
                <div className='award-progres-passed tests-passed'>
                  <div className='award-progres-passed-blick'></div>
                </div>
              </div>
            </div>
            <div className='award-list-item last'>
              <span className='award-title'>Отримано рейтингу</span>
              <div className='award-progres'>
                <span className='award-progress-span'>1300 / 1500</span>
                <div className='award-progres-passed rate'>
                  <div className='award-progres-passed-blick'></div>
                </div>
              </div>
            </div>
            <p className='more-awards'>Більше статистики...</p>
          </div>
          <div className="news">
            <h2 className='awards-title'>Новини та події</h2>
            <div className='news-list'>
              <div className='news-item'>
                <h3>VasyaPop з Faculta de Tila перейшов в Лігу Спеціальностей</h3>
                <p>VasyaPop перейшов в Лігу Спеціальностей посівши 2 місц...</p>
              </div>
              <div className='news-item'>
                <h3>Ректор Yaah святкує своє День Народження</h3>
                <p>Магнат Титан досягнув віку 70 років. В честь Дня Народ...</p>
              </div>
              <div className='news-item'>
                <h3>Спілка Yaah вітає Petro1010 з посадою Зам Декана</h3>
                <p>Petro1010 посів посаду Зам Декана Faculta de Zmist. Він...</p>
              </div>
              <div className='news-item last'>
                <h3>Dmytro з Faculta de Lita понижений до Ліги Спеціальностей</h3>
                <p>Petro1010 посів посаду Зам Декана Faculta de Zmist. Він...</p>
              </div>
            </div>
            <p className='more-awards'>Більше новин...</p>
          </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default Main
