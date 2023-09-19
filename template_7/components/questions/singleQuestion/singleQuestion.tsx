import { FC } from "react";
import styles from "./singleQuestion.module.scss";
import Text from "@/components/text";

interface IProps {
  question: string;
  answer: string;
}

const SingeQuestion: FC<IProps> = ({ question, answer }) => {
  return (
    <div className={styles.container}>
      <div className={styles.textBlock}>
        <Text size="lg" weight="medium" color="black" transform="uppercase" align="left">
          {question}
        </Text>
        <Text size="sm" weight="normal" align="left">
          {answer}
        </Text>
      </div>
    </div>
  );
};

export default SingeQuestion;
