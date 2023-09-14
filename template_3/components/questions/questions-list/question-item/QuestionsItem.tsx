import styles from './questions-item.module.scss';
import React, { useState } from 'react';

interface IQuestionsItem {
  title: React.ReactNode;
  content: React.ReactNode;
  size: string;
}

enum QuestionTitleSize {
  OneRow = 'one-row',
  MinWidth705 = '705',
  MiddleWidth794 = '794',
  MaxWidth823 = '823',
}

const QuestionsItem: React.FC<IQuestionsItem> = ({ title, content, size }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded((prevState) => !prevState);
  };

  let titleClassName = '';

  switch (size) {
    case QuestionTitleSize.OneRow:
      if (styles.questions__title_one_row !== undefined){
        titleClassName = styles.questions__title_one_row;
      }
      break;
    case QuestionTitleSize.MinWidth705:
      if (styles.questions__title_min_width !== undefined){
        titleClassName = styles.questions__title_min_width;
      }
      break;
    case QuestionTitleSize.MiddleWidth794:
      if (styles.questions__title_middle_width !== undefined){
        titleClassName = styles.questions__title_middle_width;
      }
      break;
    case QuestionTitleSize.MaxWidth823:
      if (styles.questions__title_max_width !== undefined){
        titleClassName = styles.questions__title_max_width;
      }
      break;
    default:
      titleClassName = '';
  }

  return (
    <div
      className={`${styles.questions__item} ${
        isExpanded ? styles.expanded : ''
      }`}
      onClick={toggleAccordion}
    >
      <div className={styles.questions__header}>
        {title && (
          <div className={titleClassName}>{title}</div>
        )}
        <div className={styles.questions__state}>{isExpanded ? '-' : '+'}</div>
      </div>
      {isExpanded && <div className={styles.questions__content}>{content}</div>}
    </div>
  );
};

export default QuestionsItem;