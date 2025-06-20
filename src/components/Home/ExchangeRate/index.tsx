import styles from './styles.module.scss';
import { CurrentCurrency } from '@components/Home/ExchangeRate/CurrentCurrency';
import { DESIRED_CURRENCIES } from '@components/Home/ExchangeRate/constants';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/routes';
import BankImage from '@/assets/images/bank.svg';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { getExchangeRateAsync } from '@/store/actions/ExchangeRate';
import { useCallback, useEffect, useState } from 'react';
import { SkeletonBlock } from '@components/UI/SkeletonBlock';

export const ExchangeRate = () => {
  const dispatch = useAppDispatch();

  const { loading, rate } = useAppSelector((state) => state.exchangeRate);

  const { conversion_rates } = rate || {};

  const [currencies, setCurrencies] = useState<
    { currency: string; value: number }[]
  >([]);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  const handleGetExchangeRate = useCallback(async () => {
    try {
      const data = await dispatch(
        getExchangeRateAsync({ base: 'RUB' })
      ).unwrap();

      if (data.time_last_update_unix) {
        const date = new Date(data.time_last_update_unix * 1000);
        setLastUpdated(
          date.toLocaleString('ru-RU', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          })
        );
      }
    } catch (error) {
      console.error(error);
    }
  }, [dispatch]);

  useEffect(() => {
    handleGetExchangeRate();

    const interval = setInterval(handleGetExchangeRate, 15 * 60 * 1000);

    return () => {
      clearInterval(interval);
    };
  }, [handleGetExchangeRate]);

  useEffect(() => {
    if (!conversion_rates) return;

    const filtered = DESIRED_CURRENCIES.map((currency) => ({
      currency,
      value: conversion_rates[currency],
    }));

    setCurrencies(filtered);
  }, [conversion_rates]);

  return (
    <section className={styles.exchange}>
      <article className={styles.exchange__card}>
        <div className={styles.exchange__left}>
          <h2 className={styles.exchange__title}>
            <SkeletonBlock loading={loading}>
              Exchange rate in internet bank
            </SkeletonBlock>
          </h2>
          <p className={styles.exchange__subtitle}>
            <SkeletonBlock loading={loading}>Currency</SkeletonBlock>
          </p>

          <CurrentCurrency currencies={currencies} />

          <Link className={styles.exchange__link} to={ROUTES.home}>
            <SkeletonBlock loading={loading} skeletonProps={{ width: 100 }}>
              All courses
            </SkeletonBlock>
          </Link>
        </div>

        <div className={styles.exchange__right}>
          <p className={styles.exchange__date}>
            <SkeletonBlock loading={loading} skeletonProps={{ width: 200 }}>
              Update every 15 minutes, MSC {lastUpdated}
            </SkeletonBlock>
          </p>

          <SkeletonBlock
            loading={loading}
            skeletonProps={{ className: styles.exchange__image, width: 120 }}
          >
            <img
              className={styles.exchange__image}
              src={BankImage}
              alt="Bank"
            />
          </SkeletonBlock>
        </div>
      </article>
    </section>
  );
};
