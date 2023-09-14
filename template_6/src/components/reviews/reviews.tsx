import styles from './reviews.module.scss';
import Carousel from './carousel/carousel';
import Text from '../text';
import { useTranslation } from 'next-i18next';

const Reviews = () => {
  const { t } = useTranslation(["common"]);
  return (
    <div id='reviews' className={styles.reviews}>
      <div className={styles.container}>
        <Text className={styles.reviews__title} transform='uppercase' color='gray_dark' weight='bold' align='center'>
          {t("reviews")}
        </Text>
        <Carousel />
      </div>
    </div>
  );
};

export default Reviews;