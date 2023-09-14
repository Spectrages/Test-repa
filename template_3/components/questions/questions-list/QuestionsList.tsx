import styles from './questions-list.module.scss';
import QuestionsItem from './question-item/QuestionsItem';
import questionsData from './questionsData';

const QuestionsList = () => {
  return (
    <div className={styles.questions_list}>
      {questionsData.map((item, index) => (
        <QuestionsItem key={index} title={item.title} content={item.content} size={item.size} />
      ))}
    </div>
  )
}

export default QuestionsList;