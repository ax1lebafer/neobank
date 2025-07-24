import { Header } from '@components/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from '@components/Footer';
import styles from './styles.module.scss';

export const Layout = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
