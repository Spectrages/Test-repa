import styles from './reviews.module.scss';
import Carousel from './carousel/carousel';
import Text from '../text';
import { useTranslation } from 'next-i18next';

const Reviews = () => {
  const { t } = useTranslation(["common"]);
  return (
    <div className={styles.reviews}>
      <Text className={styles.reviews__title} transform='uppercase' weight='semiBold' align='center' size='xxl'>
          {t("reviews")}
      </Text>
      <div className={styles.container}>
        <Carousel />
      </div>
    </div>
  );
};

export default Reviews;