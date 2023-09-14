import styles from './questions-item.module.scss';
import React, { useState } from 'react';
import Text from '@/components/text';

interface IQuestionsItem {
  title: React.ReactNode;
  content: React.ReactNode;
}

const QuestionsItem: React.FC<IQuestionsItem> = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded((prevState) => !prevState);
  };


  return (
    <div
      className={`${styles.questions__item} ${
        isExpanded ? styles.expanded : ''
      }`}
      onClick={toggleAccordion}
    >
      <div className={styles.questions__header}>
        <Text className={styles.questions__title} weight='semiBold' transform='uppercase'>{title}</Text>
        <Text className={styles.questions__state}>?</Text>
      </div>
      {isExpanded && <Text className={styles.questions__content} size='sm'>{content}</Text>}
    </div>
  );
};

export default QuestionsItem;