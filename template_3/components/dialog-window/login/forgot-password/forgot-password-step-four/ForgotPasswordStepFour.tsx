import React from 'react';
import styles from './forgot-password-step-four.module.scss';
import cn from 'classnames';
import Text from '@/components/text';

interface ForgotPasswordStepFourProps {
  goToLogin: () => void;
  buttonClassName?: string;
}

const ForgotPasswordStepFour: React.FC<ForgotPasswordStepFourProps> = ({ goToLogin, buttonClassName  }) => {
  const handleDoneClick = () => {
    goToLogin();
  };

  const buttonClassNames = cn(styles.forgot_password__button, buttonClassName);

  return (
    <div className={styles.forgot_password__main_section}>
      <div className={styles.forgot_password__text}>
         Your password was changed <div className={styles.forgot_password__key_icon}></div>
       </div>
      <button className={buttonClassNames} onClick={handleDoneClick}>
        <Text className={styles.forgot_password__button_text} weight='medium'>Done</Text>
      </button>
    </div>
  );
};

export default ForgotPasswordStepFour;