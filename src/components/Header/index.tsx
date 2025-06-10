import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/routes';
import { HEADER_LINKS } from '@components/Header/constants';
import { CustomButton } from '@components/UI/CustomButton';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to={ROUTES.home} className={styles.header__logo}>
        NeoBank
      </Link>

      <nav className={styles.header__nav}>
        {HEADER_LINKS.map((link) => (
          <Link
            className={styles.header__link}
            key={link.label}
            to={link.route}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <CustomButton>Online Bank</CustomButton>
    </header>
  );
};
