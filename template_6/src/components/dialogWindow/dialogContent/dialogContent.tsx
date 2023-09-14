import React from 'react';
import Link from 'next/link';
import styles from './dialogContent.module.scss';
import Text from '@/components/text';
import { Button } from '@/components/button';
import Image from 'next/image';
import FacebookIcon from '@/public/icons/Facebook.svg';
import GoogleIcon from '@/public/icons/Google.svg';
import { useTranslation } from 'next-i18next';

interface IDialogContent {
  openRegister: () => void;
  openLogin: () => void;
}

const DialogContent: React.FC<IDialogContent> = ({ openRegister, openLogin }) => {
  const { t } = useTranslation(["auth"]);
  return (
    <div className={styles.dialog_content__main_section}>
      <Text className={styles.dialog_content__title} weight='semiBold' align='center'>
        {t("auth_req_modal_title")}
      </Text>
      <div className={styles.dialog_content__actions}>
        <Button className={styles.dialog_content__button} onClickHandler={openRegister}>
          <Text className={styles.dialog_content__button_text} weight='medium' size='sm' align='center' transform='uppercase' color='white'>
            {t("signup")}
          </Text>
        </Button>
        <Button className={styles.dialog_content__button} onClickHandler={openLogin}>
          <Text className={styles.dialog_content__button_text} weight='medium' size='sm' align='center' transform='uppercase' color='white'>
            {t("signin")}
          </Text>
        </Button>
      </div>
      <div className={styles.dialog_content__social_networks}>
        <Link className={styles.dialog_content__social_networks_item} href='https://www.facebook.com/'>
          <Image src={FacebookIcon} alt='facebook' />
        </Link>
        <Link className={styles.dialog_content__social_networks_item} href='https://www.google.com/'>
          <Image src={GoogleIcon} alt='google' />
        </Link>
      </div>
    </div>
  );
};

export default DialogContent;