import styles from './styles.module.scss';
import Logo from '@/assets/images/logo.png';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.footer__contacts}>
          <img className={styles.footer__logo} src={Logo} alt="Logo" />

          <nav>
            <a href="tel:+74959842513">+7 (495) 984 25 13</a>
            <a href="mailto:info@neoflex.ru">info@neoflex.ru</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
