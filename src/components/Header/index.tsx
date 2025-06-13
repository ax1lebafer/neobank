import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/routes';
import { HEADER_LINKS } from '@components/Header/constants';
import { CustomButton } from '@components/UI/CustomButton';
import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';

export const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        headerRef.current &&
        !headerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className={styles.header} ref={headerRef}>
      <Link to={ROUTES.home} className={styles.header__logo}>
        NeoBank
      </Link>

      <nav
        className={cn(styles.header__nav, isOpen ? styles.header__navOpen : '')}
      >
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

      <div className={styles.header__buttonbox}>
        <CustomButton>Online Bank</CustomButton>

        <button
          className={styles.header__burger}
          onClick={() => setIsOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};
