import styles from './reviews.module.scss';
import Carousel from './carousel/Carousel';
import Underline from '../underline/Underline';
import Text from '../text';

const Reviews = () => {
  return (
    <div className={styles.reviews}>
      <div className={styles.container}>
        <Text className={styles.reviews__title} weight='bold' size='xl'>Review</Text>
        <Carousel />
        <Underline />
      </div>
    </div>
  );
};

export default Reviews;