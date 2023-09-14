import React from 'react';
import HumanCardStar from '../human-card-star/HumanCardStar';
import styles from './human-card-description.module.scss';
import Text from '@/components/text';

interface IHumanCardDescriptionProps {
  name: string,
  age: string,
  starNumber: string
};

const HumanCardDescription: React.FC<IHumanCardDescriptionProps> = ({ name, age, starNumber }) => {
  return (
    <div className={styles.human_card_description}>
      <div className={styles.human_card_description__text}>
        <Text className={styles.human_card_description__name} weight='medium' align='left'>
          {name}
        </Text>
        <div className={styles.human_card_description__years}>
          {age}
        </div>
      </div>
      <HumanCardStar starNumber={starNumber}/>
    </div>
  );
};

export default HumanCardDescription;