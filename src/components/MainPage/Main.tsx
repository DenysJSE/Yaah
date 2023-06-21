import './Main.css';
import '../../App.css'
import UserLogo from '../../images/photo_2023-04-20_14-25-32.jpg'
import Award1 from '../../images/Award1.png'
import Award2 from '../../images/Award2.png'
import Award3 from '../../images/Award3.png'
import Biology from '../../images/Biology.png'
import Chemistry from '../../images/Chemistry.png'
import English from '../../images/English.png'
import Geography from '../../images/Geography.png'
import History from '../../images/History.png'

interface HeaderProps {
  isWhiteTheme: boolean;
}

function Main({isWhiteTheme}: HeaderProps) {
  return (
    <div className={`page ${isWhiteTheme ? '' : 'main-page-dark-theme'}`}>
      <div className='mane-page'>
        <div className='user-description'>
          <div className='user-logo-item'><img src={UserLogo} alt="user-logo" className='user-logo' /></div>
          <div className='user-description-item'>
            <div className='user-name'><h2>DenysMut</h2></div>
            <div className='user-facultet'><h2>Факультет: <span className='user-description-span'>Faculta de Lita</span></h2></div>
            <div className='user-rank'><h2>Звання: <span className='user-description-span'>Шукач</span></h2></div>
          </div>
        </div>
        <div className="current-course">
          <img src={History} alt="history-icon" className='curent-course-icon' />
          <div className="main-information">
            <div className="course-name">
              <h1>Faculta de Lita</h1>
            </div>
            <div className="lessons-test-progress">
              <div className="lessons-progress">
                <div className="lessons-test-progress-title">
                  Пройдено уроків
                </div>
                <div className="progress-bar">
                  <div className='lessons-progres'>
                    <span className='lessons-progress-span'>40 / 100</span>
                    <div className='lessons-progres-passed lessons'></div>
                  </div>
                </div>
                <div className="academy-link">
                  <span className="academy-link-span">Перейти в Академію</span>
                </div>
              </div>
              <div className="tests-progress">
                <div className="lessons-test-progress-title">
                  Пройдено тестів
                </div>
                <div className="progress-bar">
                  <div className='lessons-progres'>
                    <span className='lessons-progress-span'>23 / 100</span>
                    <div className='lessons-progres-passed tests'></div>
                  </div>
                </div>
                <div className="academy-link">
                  <span className="academy-link-span">Перейти в Лабораторію</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='user-awards'>
          <h2 className='awards-title'>Твої досягнення</h2>
          <div className='awards-icons'>
            <img src={Award1} alt="award1" className='award-icon'/>
            <img src={Award2} alt="award2" className='award-icon'/>
            <img src={Award3} alt="award3" className='award-icon'/>
            <img src={Award1} alt="award4" className='award-icon isnot-get'/>
            <img src={Award2} alt="award5" className='award-icon isnot-get'/>
            <img src={Award3} alt="award6" className='award-icon isnot-get'/>
            <img src={Award1} alt="award6" className='award-icon isnot-get'/>
            <img src={Award2} alt="award6" className='award-icon isnot-get'/>
            <img src={Award3} alt="award6" className='award-icon isnot-get'/>
          </div>
        </div>
        <div className="course-recomendation">
          <h1 className='course-recomendation-title'>Курси для тебе</h1>
          <div className="recomended-courses">
            <img src={Biology} alt="course-icon" className='course-recomendation-icon' />
            <img src={Chemistry} alt="course-icon" className='course-recomendation-icon' />
            <img src={English} alt="course-icon" className='course-recomendation-icon' />
            <img src={Geography} alt="course-icon" className='course-recomendation-icon' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
