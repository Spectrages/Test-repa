import React from 'react';
import styles from './questionsList.module.scss';
import QuestionsItem from './questionItem/questionsItem';
import { useTranslation } from 'next-i18next';

const QuestionsList = () => {
  const { t } = useTranslation(["seo"]);
  const questionsData = [
    {
      title: t(`question_name_1`),
      content: t(`question_answ_1`)
    },
    {
      title: t(`question_name_2`),
      content: t(`question_answ_2`)
    },
    {
      title: t(`question_name_3`),
      content: t(`question_answ_3`)
    },
    {
      title: t(`question_name_4`),
      content: t(`question_answ_4`)
    },
    {
      title: t(`question_name_5`),
      content: t(`question_answ_5`)
    },
    {
      title: t(`question_name_6`),
      content: t(`question_answ_6`)
    },
  ];
  return (
    <div className={styles.questions_list}>
      {questionsData.map((item, index) => (
        <QuestionsItem key={index} title={item.title} content={item.content} className={styles.questions_list__item} />
      ))}
    </div>
  )
}

export default QuestionsList;