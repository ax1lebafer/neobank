import { CustomIconButton } from '@components/UI/CustomIconButton';
import FlyIcon from '@/assets/icons/fly.svg';
import MailIcon from '@/assets/icons/mail.svg';
import styles from './styles.module.scss';

export const SubscribeForm = () => {
  return (
    <form className={styles.form}>
      <img src={MailIcon} alt="Mail icon" className={styles.form__icon} />
      <input
        type="email"
        placeholder="Your email"
        className={styles.form__input}
      />
      <CustomIconButton icon={FlyIcon} type="submit">
        Subscribe
      </CustomIconButton>
    </form>
  );
};
