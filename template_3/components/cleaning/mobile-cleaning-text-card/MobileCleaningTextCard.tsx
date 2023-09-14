import styles from './mobile-cleaning-text-card.module.scss';
import React, { useState } from "react";

interface IMobileCleaningTextCard {
  title: React.ReactNode,
  description: React.ReactNode[]
};

const MobileCleaningTextCard: React.FC<IMobileCleaningTextCard> = ({ title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div className={`${styles.mobile_cleaning_text_card} ${isExpanded ? styles.expanded : ""
      }`}
      onClick={toggleAccordion} >
      <div className={styles.mobile_cleaning_text_card__title}>
        {title}
      </div>
      {isExpanded && <ul className={styles.mobile_cleaning_text_card__description}>{description.map((item, index) => (
        <li key={index}>{item}</li>
      ))}</ul>}
    </div>
  );
};

export default MobileCleaningTextCard;