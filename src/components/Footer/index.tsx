import styles from './styles.module.scss';
import Logo from '@/assets/images/logo.png';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/routes';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.footer__contacts}>
          <Link to={ROUTES.home}>
            <img className={styles.footer__logo} src={Logo} alt="Logo" />
          </Link>

          <nav className={styles.footer__nav}>
            <ul className={styles.footer__navlist}>
              <li>
                <a href="tel:+74959842513">+7 (495) 984 25 13</a>
              </li>

              <li>
                <a href="mailto:info@neoflex.ru">info@neoflex.ru</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};
