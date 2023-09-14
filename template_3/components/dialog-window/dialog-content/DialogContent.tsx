import React from 'react';
import Link from 'next/link';
import styles from './dialog-content.module.scss';
import Text from '@/components/text';

interface IDialogContent {
  title: React.ReactNode;
  openRegister: () => void;
  openLogin: () => void;
}

const DialogContent: React.FC<IDialogContent> = ({ title, openRegister, openLogin }) => {
  return (
    <div className={styles.dialog_content__main_section}>
      <Text className={styles.dialog_content__title} size='xl' weight='bold'>{title}</Text>
      <div className={styles.dialog_content__actions}>
        <button className={styles.dialog_content__button} onClick={openRegister}>
          <Text className={styles.dialog_content__button_text} weight='medium'>Sign Up</Text>
        </button>
        <button className={styles.dialog_content__button} onClick={openLogin}>
          <Text className={styles.dialog_content__button_text} weight='medium'>Log In</Text>
        </button>
      </div>
      <div className={styles.dialog_content__social_networks}>
        <Link className={styles.dialog_content__social_networks_item} href='https://www.facebook.com/' />
        <Link className={styles.dialog_content__social_networks_item} href='https://www.google.com/' />
      </div>
    </div>
  );
};

export default DialogContent;