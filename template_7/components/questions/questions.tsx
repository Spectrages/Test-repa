import styles from "./questions.module.scss";
import { Button } from "@/components/button";
import Text from "@/components/text";
import SingeQuestion from "./singleQuestion/singleQuestion";
import { useState } from "react";

const FAQ = [
  {
    question: "1. What does your maid service include?",
    answer:
      "Service includes a range of cleaning and housekeeping tasks, such as dusting, vacuuming, mopping, bathroom and kitchen cleaning, laundry, and other tasks as requested by the client.",
  },
  {
    question: "2. Are your cleaning products and equipment safe?",
    answer:
      "Yes, i use high-quality cleaning products and equipment that are safe for use in homes and offices.",
  },
  {
    question: "3. Can I schedule a one-time cleaning, or do you only offer periodic services?",
    answer:
      "There are both one-time and periodic cleaning services. You can schedule services at any time convenient for you.",
  },
  {
    question: "4. How do I schedule maid services with your company?",
    answer:
      "You can schedule maid services with us by emails, or through our online booking system.",
  },
  {
    question: "5. Do you provide your own cleaning supplies?",
    answer:
      "I offer a wide range of cleaning services, including deep cleaning, routine cleaning, post-repair cleaning and specialized cleaning services.",
  },
  {
    question: "6. Do you provide insurance?",
    answer:
      "Yes, I am fully insured and bonded for your peace of mind. This means that in the unlikely event of an accident or loss, you are protected.",
  },
];

const Questions = () => {
  const [visibleQuestions, setVisibleQuestions] = useState(4);

  const handleMoreClick = () => {
    console.log(visibleQuestions);
    setVisibleQuestions(visibleQuestions + 2);
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Text size="xxl" weight="bold" color="black" transform="uppercase">
          Questions
        </Text>
      </div>
      <div className={styles.questions}>
        <section className={styles.questionsBlock}>
          {FAQ.slice(0, visibleQuestions).map((item, index) => {
            return <SingeQuestion question={item.question} answer={item.answer} key={index} />;
          })}
        </section>
        {visibleQuestions < FAQ.length && (
          <Button palette="secondary" className={styles.button} onClickHandler={handleMoreClick}>
            more
          </Button>
        )}
      </div>
    </div>
  );
};

export default Questions;
