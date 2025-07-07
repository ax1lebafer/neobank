import styles from './styles.module.scss';
import CardImage from '@/assets/images/card_1.png';
import { CustomButton } from '@components/UI/CustomButton';
import { CARD_CONDITIONS } from '@components/Loan/BannerSection/constants';
import { Tooltip } from '@components/shared/Tooltip';

export const BannerSection = () => {
  return (
    <section className={styles.banner}>
      <article className={styles.banner__card}>
        <div className={styles.banner__content}>
          <h1 className={styles.banner__title}>Platinum digital credit card</h1>
          <p className={styles.banner__description}>
            Our best credit card. Suitable for everyday spending and shopping.
            Cash withdrawals and transfers without commission and interest.
          </p>
          <ul className={styles.banner__contitions}>
            {CARD_CONDITIONS.map((c) => (
              <Tooltip title={c.tooltip} key={c.label}>
                <li className={styles.banner__item}>
                  <h3>{c.label}</h3>
                  <p>{c.text}</p>
                </li>
              </Tooltip>
            ))}
          </ul>

          <CustomButton>Apply for card</CustomButton>
        </div>

        <img
          src={CardImage}
          className={styles.banner__image}
          alt="Card image"
        />
      </article>
    </section>
  );
};
