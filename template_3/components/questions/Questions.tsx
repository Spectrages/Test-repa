"use client";
import styles from './questions.module.scss';
import QuestionsList from './questions-list/QuestionsList';
import Text from '../text';

const Questions = () => {
  return (
    <div id='questions' className={styles.questions}>
      <div className={styles.container}>
        <Text className={styles.questions__title} weight='bold' size='xl'>Questions</Text>
        <QuestionsList />
      </div>
    </div>
  )
}

export default Questions;