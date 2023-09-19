import Checkbox from "../checkbox/checkbox";
import styles from "./cleaning.module.scss";
import Text from "@/components/text";

import { useState } from "react";
import { cards, cleaningArray, singleCardData } from "./fakeData";
import SingleCardData from "./singleCardData/singleCardData";

const Cleaning = () => {
  const [, setSelectedCleaning] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const handleCheckboxChange = (name: string) => {
    setAnimate(true);
    setTimeout(() => {
      setSelectedCleaning(name);
      const index = cards.findIndex((card) => card.name === name);
      if (index !== -1) {
        setCurrentIndex(index);
      }
      setAnimate(false);
    }, 500);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Text size="xxl" weight="bold" color="black" transform="uppercase">
          types of cleaning
        </Text>
      </div>
      <section className={styles.checkboxesBlock}>
        {cleaningArray.map((item, index) => {
          return (
            <Checkbox
              label={item}
              key={index}
              name="cleaning"
              onChange={() => handleCheckboxChange(item)}
            />
          );
        })}
      </section>
      <section className={`${styles.cardsBlock} ${animate ? styles.animateOut : ""}`}>
        {singleCardData[currentIndex] ? (
          <SingleCardData
            image={singleCardData[currentIndex]?.image}
            name={singleCardData[currentIndex]?.name}
            title={singleCardData[currentIndex]?.title}
            description={singleCardData[currentIndex]?.description}
            className={animate ? styles.animateIn : ""}
          />
        ) : null}
      </section>
    </div>
  );
};
export default Cleaning;
