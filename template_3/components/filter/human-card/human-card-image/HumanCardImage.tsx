import React from 'react';
import styles from './human-card-image.module.scss';
import Image, { StaticImageData } from 'next/image';

interface IHumanCardImageProps {
  source: StaticImageData,
};

const HumanCardImage: React.FC<IHumanCardImageProps> = ({ source }) => {
  return (
    <div className={styles.human_card_image}>
      <Image src={source} alt="Human image" />
    </div>
  );
};

export default HumanCardImage;