import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import styles from './switch.module.scss';
import cn from 'classnames';
import { useRouter } from 'next/router';

interface ISwitchProps {
  className?: string
}

const Switch: React.FC<ISwitchProps> = ({ className }) => {
  const { t, i18n } = useTranslation(["common"]);
  const [isEnglish, setIsEnglish] = useState(true);
  const router = useRouter();
  
  const toggleLanguage = () => {
    if (!isEnglish) {
      i18n?.changeLanguage('en');
      router.push(router.pathname, router.asPath, { locale: 'en' });
    } else {
      i18n?.changeLanguage('he');
    
      router.push(router.pathname, router.asPath, { locale: 'he' });
    }
    setIsEnglish(!isEnglish);
  };

  const switchClassNames = cn(styles.switchContainer, className);

  return (
    <div className={switchClassNames}>
       <span>{t('English')}</span>
      <div
        className={`${styles.switchBtn} ${isEnglish ? '' : styles.switchOn}`}
        onClick={toggleLanguage}
      >
        <div className={styles.switchBtnHandle}></div>
      </div>
      <span>{t('Hebrew')}</span>
    </div>
  );
};

export default Switch;