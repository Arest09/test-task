import '../Footer/Footer.scss'
import {ReactComponent as Github} from '../../icons/github/github.svg'
import '../../icons/github/github.scss'

export function Footer() {
    return (
        <footer className="footer">
        <div className="container">
          <div className="footer__inner">
            <div className="footer__item">
              <a href='https://github.com/Arest09'><Github className="github"/></a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  