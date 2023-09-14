import styles from './reviews.module.scss';
import Carousel from './carousel/carousel';
import Text from '../text';
import { useTranslation } from 'next-i18next';

const Reviews = () => {
  const { t } = useTranslation(["seo"]);
  return (
    <div className={styles.reviews}>
      <div className={styles.container}>
        <Carousel />
        <Text className={styles.reviews__description} weight='bold' align='center'>
          {t("reviews_subheader")}
        </Text>
      </div>
    </div>
  );
};

export default Reviews;