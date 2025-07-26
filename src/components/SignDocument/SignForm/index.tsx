import styles from './styles.module.scss';
import { AttachDownload } from '@components/SignDocument/AttachDownload';
import { Checkbox } from '@components/UI/Checkbox';
import { CustomButton } from '@components/UI/CustomButton';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { SkeletonBlock } from '@components/UI/SkeletonBlock';
import { signDocumentAsync } from '@/store/actions/Loan';
import { useParams } from 'react-router-dom';
import { IS_SIGN_DOCUMENT } from '@/constants/localStorageKeys';
import { setSignDocument } from '@/store/reducers/Loan';

export const SignForm = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const { loading } = useAppSelector((state) => state.loan);

  const [isAgree, setIsAgree] = useState(false);

  const onSubmit = async () => {
    if (!id) return;

    try {
      await dispatch(signDocumentAsync(id)).unwrap();

      localStorage.setItem(IS_SIGN_DOCUMENT, 'true');
      dispatch(setSignDocument(true));
    } catch (error) {
      console.error(error);
      localStorage.removeItem(IS_SIGN_DOCUMENT);
    }
  };

  return (
    <SkeletonBlock loading={loading} skeletonProps={{ height: 350 }}>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div className={styles.form__titleWrapper}>
          <h2>Signing of documents</h2>
          <p>Step 4 of 5</p>
        </div>

        <p className={styles.form__description}>
          Information on interest rates under bank deposit agreements with
          individuals. Center for Corporate Information Disclosure. Information
          of a professional participant in the securities market. Information
          about persons under whose control or significant influence the Partner
          Banks are. By leaving an application, you agree to the processing of
          personal data, obtaining information, obtaining access to a credit
          history, using an analogue of a handwritten signature, an offer, a
          policy regarding the processing of personal data, a form of consent to
          the processing of personal data.
        </p>

        <AttachDownload />

        <div className={styles.form__footer}>
          <Checkbox
            label="I agree"
            checked={isAgree}
            onChange={(e) => setIsAgree(e.target.checked)}
          />
          <CustomButton
            className={styles.form__button}
            disabled={!isAgree}
            type="submit"
          >
            Send
          </CustomButton>
        </div>
      </form>
    </SkeletonBlock>
  );
};
