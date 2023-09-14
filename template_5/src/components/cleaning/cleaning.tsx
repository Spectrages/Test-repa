import styles from './cleaning.module.scss';
import CleaningTextCard from './cleaningTextCard/cleaningTextCard';
import { useTranslation } from 'next-i18next';
import Text from '../text';

const Cleaning = () => {
  const { t } = useTranslation(["seo", "common"]);
  const cardInfo = [
    {
      title: t(`cleaning_frequency_title_1`),
      subtitle: t(`cleaning_frequency_body_1`)
    },
    {
      title: t(`cleaning_frequency_title_2`),
      subtitle: t(`cleaning_frequency_body_2`)
    },
    {
      title: t(`cleaning_frequency_title_3`),
      subtitle: t(`cleaning_frequency_body_3`)
    }
  ];

  return (
    <div id='services' className={styles.cleaning}>
      <div className={styles.container}>
        <Text weight='semiBold' size='xxl' align='center' transform='uppercase' className={styles.cleaning__title}>
          {t(`cleaning_frequency`, {ns: "common"})}
        </Text>
        <div className={styles.cleaning__text_cards_section}>
          {cardInfo.map((item, index) => (
            <CleaningTextCard
              key={index}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cleaning;