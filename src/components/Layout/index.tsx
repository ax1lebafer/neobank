import { Header } from '@components/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from '@components/Footer';
import styles from './styles.module.scss';
import { useEffect } from 'react';
import { STEP } from '@/constants/localStorageKeys';
import { useAppDispatch } from '@/store/store';
import { setStep } from '@/store/reducers/Loan';

export const Layout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const stepStored = localStorage.getItem(STEP);

    if (stepStored) {
      dispatch(setStep(Number(stepStored)));
    }
  }, [dispatch]);

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
