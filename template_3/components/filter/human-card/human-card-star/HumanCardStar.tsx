import React from 'react';
import styles from './human-card-star.module.scss';

interface IHumanCardStarProps {
  starNumber: string
};

const HumanCardStar: React.FC<IHumanCardStarProps> = ({ starNumber }) => {
  return <div className={styles.human_card_star}>{starNumber}</div>;
};

export default HumanCardStar;