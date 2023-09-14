import styles from './cleaning.module.scss';
import CleaningTextCard from './cleaningTextCard/cleaningTextCard';
import Underline from '../underline/Underline';
import { useTranslation } from 'next-i18next';

const Cleaning = () => {
  const { t } = useTranslation(["seo"]);
  const cardInfo = [];

  for(let i = 1; i < 5; i += 1) {
    cardInfo.push(t(`service_description_${i}`).split('|'))
  }

  return (
    <div id='services' className={styles.cleaning}>
      <div className={styles.cleaning__upper_underline}>
        <Underline />
      </div>
      <div className={styles.container}>
        <div className={styles.cleaning__text_cards_section}>
          {cardInfo.map((item, index) => (
            <CleaningTextCard
              key={index}
              title={t(`service_title_${index + 1}`)}
              subtitle={t(`service_body_${index + 1}`)}
              description={item}
            />
          ))}
        </div>
      </div>
      <div className={styles.cleaning__underline}>
        <Underline />
      </div>
    </div>
  );
};

export default Cleaning;