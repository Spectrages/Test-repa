import styles from './cleaning.module.scss';
import CleaningItem from './cleaningItem/cleaningItem';
import { useTranslation } from 'next-i18next';
import FirstCleaningImage from '@/public/images/cleaning_image_1.jpg';
import SecondCleaningImage from '@/public/images/cleaning_image_2.jpg';
import ThirdCleaningImage from '@/public/images/cleaning_image_3.jpg';

const Cleaning = () => {
  const { t } = useTranslation(["seo", "common"]);
  const cardInfo = [
    {
      title: t(`cleaning_1`),
      source: FirstCleaningImage
    },
    {
      title: t(`cleaning_2`),
      source: SecondCleaningImage
    },
    {
      title: t(`cleaning_3`),
      source: ThirdCleaningImage

    }
  ];

  return (
    <div id='services' className={styles.cleaning}>
      <div className={styles.container}>
        <div className={styles.cleaning__items_section}>
          {cardInfo.map((item, index) => (
            <CleaningItem
              key={index}
              title={item.title}
              source={item.source}
              className={styles.cleaning__item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cleaning;