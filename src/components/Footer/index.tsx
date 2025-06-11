import styles from './styles.module.scss';
import Logo from '@/assets/images/logo.png';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/routes';
import { FOOTER_LINKS } from '@components/Footer/constants';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <section className={styles.footer__top}>
          <Link to={ROUTES.home}>
            <img className={styles.footer__logo} src={Logo} alt="Logo" />
          </Link>

          <address className={styles.footer__contacts}>
            <a href="tel:+74959842513">+7 (495) 984 25 13</a>
            <a href="mailto:info@neoflex.ru">info@neoflex.ru</a>
          </address>
        </section>

        <section className={styles.footer__links}>
          <nav className={styles.footer__nav}>
            <ul className={styles.footer__navList}>
              {FOOTER_LINKS.map((link) => (
                <li key={link.label} className={styles.footer__navItem}>
                  <Link to={link.route}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </div>
    </footer>
  );
};
