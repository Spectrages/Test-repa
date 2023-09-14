import styles from './questions.module.scss';
import QuestionsList from './questions-list/questionsList';
import Text from '../text';
import { useTranslation } from 'next-i18next';

const Questions = () => {
  const { t } = useTranslation(["common"]);
  return (
    <div id='questions' className={styles.questions}>
      <div className={styles.container}>
        <Text className={styles.questions__title} weight='semiBold' size='xxl' align='center' transform='uppercase'>
          {t("anwsers")}
        </Text>
        <QuestionsList />
      </div>
    </div>
  )
}

export default Questions;