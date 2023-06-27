import "./Main.css";
import "../../App.css";
import Award1 from "../../images/Award1.png";
import Award2 from "../../images/Award2.png";
import Award3 from "../../images/Award3.png";
import History from "../../images/History.png";
import User1 from "../../images/photo1.jpg";
import User2 from "../../images/photo2.jpg";
import { Link } from "react-router-dom";

interface HeaderProps {
  isWhiteTheme: boolean;
}

function Main({ isWhiteTheme }: HeaderProps) {
  return (
    <div className={`page ${isWhiteTheme ? "" : "main-page-dark-theme"}`}>
      <div className="main-page">
        <div className="current-course">
          <img
            src={History}
            alt="history-icon"
            className="curent-course-icon"
          />
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
                  <div className="lessons-progres">
                    <span className="lessons-progress-span">40 / 100</span>
                    <div className="lessons-progres-passed lessons"></div>
                  </div>
                </div>
                <div className="academy-link">
                  <Link to="/academy" className="link">
                    <span className="academy-link-span">Перейти в Академію</span>
                  </Link>
                </div>
              </div>
              <div className="tests-progress">
                <div className="lessons-test-progress-title">
                  Пройдено тестів
                </div>
                <div className="progress-bar">
                  <div className="lessons-progres">
                    <span className="lessons-progress-span">23 / 100</span>
                    <div className="lessons-progres-passed tests"></div>
                  </div>
                </div>
                <div className="academy-link">
                  <Link to="/lab" className="link">
                    <span className="academy-link-span">
                      Перейти в Лабораторію
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="awards-league">
          <div className="user-awards">
            <h2 className="awards-title">Досягнення</h2>
            <div className="awards-icons">
              <img src={Award1} alt="award1" className="award-icon" />
              <img src={Award2} alt="award2" className="award-icon" />
              <img src={Award3} alt="award3" className="award-icon" />
              <img src={Award1} alt="award4" className="award-icon" />
              <img src={Award2} alt="award5" className="award-icon" />
              <img src={Award3} alt="award6" className="award-icon" />
              <img src={Award1} alt="award6" className="award-icon" />
              <img src={Award2} alt="award6" className="award-icon" />
              <img src={Award3} alt="award6" className="award-icon" />
              <img src={Award1} alt="award6" className="award-icon" />
              <img src={Award2} alt="award6" className="award-icon isnot-get" />
              <img src={Award3} alt="award6" className="award-icon isnot-get" />
              <img src={Award1} alt="award6" className="award-icon isnot-get" />
              <img src={Award2} alt="award6" className="award-icon isnot-get" />
              <img src={Award3} alt="award6" className="award-icon isnot-get" />
              <img src={Award1} alt="award6" className="award-icon isnot-get" />
            </div>
          </div>
          <div className="league">
            <h1 className="awards-title">Ліга</h1>
            <div className="main-user-table">
              <a href="/" className="user-in-table">
                <span className="main-table-place">1</span>
                <div>
                  <img src={User1} alt="user-icon" className="main-table-user-icon" />
                </div>
                <div className="username-rate">
                  <span className="main-table-username">Denys</span>
                  <span className="main-table-rate">1300 XP</span>
                </div>
              </a>
              <a href="/" className="user-in-table">
                <span className="main-table-place">2</span>
                <div>
                  <img src={User2} alt="user-icon" className="main-table-user-icon" />
                </div>
                <div className="username-rate">
                  <span className="main-table-username">Denys</span>
                  <span className="main-table-rate">1200 XP</span>
                </div>
              </a>
              <a href="/" className="user-in-table">
                <span className="main-table-place">3</span>
                <div>
                  <img src={User1} alt="user-icon" className="main-table-user-icon" />
                </div>
                <div className="username-rate">
                  <span className="main-table-username">Denys</span>
                  <span className="main-table-rate">1100 XP</span>
                </div>
              </a>
              <a href="/" className="user-in-table">
                <span className="main-table-place">4</span>
                <div>
                  <img src={User2} alt="user-icon" className="main-table-user-icon" />
                </div>
                <div className="username-rate">
                  <span className="main-table-username">Denys</span>
                  <span className="main-table-rate">1000 XP</span>
                </div>
              </a>
              <a href="/" className="user-in-table">
                <span className="main-table-place">5</span>
                <div>
                  <img src={User1} alt="user-icon" className="main-table-user-icon" />
                </div>
                <div className="username-rate">
                  <span className="main-table-username">Denys</span>
                  <span className="main-table-rate">900 XP</span>
                </div>
              </a>
              <a href="/" className="user-in-table you">
                <span className="main-table-place">100</span>
                <div>
                  <img src={User2} alt="user-icon" className="main-table-user-icon" />
                </div>
                <div className="username-rate">
                  <span className="main-table-username">Denys</span>
                  <span className="main-table-rate">10 XP</span>
                </div>
              </a>
              <span className="more-tables">Конфедерація...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
