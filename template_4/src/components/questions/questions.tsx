"use client";
import styles from './questions.module.scss';
import QuestionsList from './questionsList/questionsList';
import Text from '../text';
import { useTranslation } from 'next-i18next';

const Questions = () => {
  const { t } = useTranslation(["common"]);
  return (
    <div id='questions' className={styles.questions}>
      <div className={styles.container}>
        <Text className={styles.questions__title} weight='bold' size='xxxl' color='brown'>
          {t("anwsers")}
        </Text>
        <QuestionsList />
      </div>
    </div>
  )
}

export default Questions;