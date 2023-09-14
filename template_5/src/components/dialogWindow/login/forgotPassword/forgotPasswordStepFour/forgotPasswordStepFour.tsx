import React from 'react';
import styles from './forgotPasswordStepFour.module.scss';
import cn from 'classnames';
import Text from '@/components/text';
import { Button } from '@/components/button';
import Image from 'next/image';
import KeyIcon from '@/public/icons/Key.svg';
import { useTranslation } from 'next-i18next';

interface ForgotPasswordStepFourProps {
  goToLogin: () => void;
  buttonClassName?: string;
}


const ForgotPasswordStepFour: React.FC<ForgotPasswordStepFourProps> = ({ goToLogin, buttonClassName  }) => {
  const { t } = useTranslation(["auth", "common"]);
  const handleDoneClick = () => {
    goToLogin();
  };

  const buttonClassNames = cn(styles.forgot_password__button, buttonClassName);

  return (
    <div className={styles.forgot_password__main_section}>
      <div className={styles.forgot_password__text}>
        {t("password_changed")} <Image src={KeyIcon} className={styles.forgot_password__key_icon} alt='Key icon' />
      </div>
      <Button className={buttonClassNames} onClickHandler={handleDoneClick}>
        <Text className={styles.forgot_password__button_text} transform='uppercase'>
          {t("done_btn", { ns: "common" })}
        </Text>
      </Button>
    </div>
  );
};

export default ForgotPasswordStepFour;