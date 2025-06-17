import styles from './styles.module.scss';
import { CurrentCurrency } from '@components/Home/ExchangeRate/CurrentCurrency';
import { DESIRED_CURRENCIES } from '@components/Home/ExchangeRate/constants';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/routes';
import BankImage from '@/assets/images/bank.svg';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { getExchangeRateAsync } from '@/store/actions/ExchangeRate';
import { useEffect, useState } from 'react';

export const ExchangeRate = () => {
  const dispatch = useAppDispatch();

  const { loading, rate } = useAppSelector((state) => state.exchangeRate);

  const { conversion_rates } = rate || {};

  const [currencies, setCurrencies] = useState<
    { currency: string; value: number }[]
  >([]);

  const handleGetExchangeRate = () => {
    dispatch(getExchangeRateAsync({ base: 'RUB' }));
  };

  useEffect(() => {
    handleGetExchangeRate();
  }, []);

  useEffect(() => {
    if (!conversion_rates) return;

    const filtered = DESIRED_CURRENCIES.map((currency) => ({
      currency,
      value: conversion_rates[currency],
    }));

    setCurrencies(filtered);
  }, [conversion_rates]);

  if (loading) {
    return <p>Загрузка</p>;
  }

  return (
    <section className={styles.exchange}>
      <article className={styles.exchange__card}>
        <div className={styles.exchange__left}>
          <h2 className={styles.exchange__title}>
            Exchange rate in internet bank
          </h2>
          <p className={styles.exchange__subtitle}>Currency</p>

          <CurrentCurrency currencies={currencies} />

          <Link className={styles.exchange__link} to={ROUTES.home}>
            All courses
          </Link>
        </div>

        <div className={styles.exchange__right}>
          <p className={styles.exchange__date}>
            Update every 15 minutes, MSC 09.08.2022
          </p>

          <img className={styles.exchange__image} src={BankImage} alt="Bank" />
        </div>
      </article>
    </section>
  );
};
