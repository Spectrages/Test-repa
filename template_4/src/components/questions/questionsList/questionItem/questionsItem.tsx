import styles from './questionsItem.module.scss';
import React from 'react';
import Text from '@/components/text';
import cn from 'classnames';

interface IQuestionsItem {
  title: React.ReactNode;
  content: React.ReactNode;
  className?: string;
}

const QuestionsItem: React.FC<IQuestionsItem> = ({ title, content, className }) => {
  const ItemClassNames = cn(styles.questions__item, className);
  return (
    <div className={ItemClassNames}>
      <Text className={styles.questions__item_title} weight='bold' size='lg' align='left'>{title}</Text>
      <Text className={styles.questions__content} align='left'>{content}</Text>
    </div>
  );
};

export default QuestionsItem;