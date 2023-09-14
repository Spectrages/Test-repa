import styles from './benefits.module.scss';
import BenefitItem from './benefit-item/BenefitItem';
import Underline from '../underline/Underline';
import benefitsData from './benefitsData';
import Text from '../text';

const Benefits = () => {
  return (
    <div className={styles.benefits}>
      <div className={styles.container}>
        <Text className={styles.benefits__title} size='xl' weight='bold'>
          Benefits
        </Text>
        <div className={styles.benefits__list}>
          {benefitsData.map((item, index) => (
            <BenefitItem
              key={index}
              source={item.source}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </div>
        <Text className={styles.benefits__description} weight='medium' size='xl'>
          Our company will help you select and order a maid to clean your apartment or cottage.
        </Text>
        <div className={styles.benefits__underline}>
          <Underline />
        </div>
      </div>
    </div>
  );
};

export default Benefits;