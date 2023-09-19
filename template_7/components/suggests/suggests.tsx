import Text from "../text";
import styles from "./suggests.module.scss";

import healthIcon from "@/assets/icons/health.svg";
import safeIcon from "@/assets/icons/safety.svg";
import keyIcon from "@/assets/icons/key.svg";
import cleaningIcon from "@/assets/icons/cleaning.svg";
import Image from "next/image";
import bottelImage from "@/assets/images/bottles_cleaning.png";
import SingleSuggest from "./singleSuggest/singleSuggest";

const Suggests = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background} />
      <div className={styles.title}>
        <Text size="xxl" weight="bold" color="black">
          I care
        </Text>
      </div>
      <section className={styles.suggestsBlock}>
        <SingleSuggest
          image={healthIcon}
          title={"TO YOUR HEALTH"}
          description={
            "I use only professional equipment and environmentally friendly hypoallergenic products."
          }
        />
        <SingleSuggest
          image={safeIcon}
          title={"TO YOUR SAFETY"}
          description={
            "You can 100% trust me: before starting work, i go through 5 stages of internship and theoretical training."
          }
        />
        <SingleSuggest
          image={keyIcon}
          title={"TO YOUR PEACE"}
          description={"I am instructed on the responsible and careful attitude to your property."}
        />
        <SingleSuggest
          image={cleaningIcon}
          title={"CLEANING QUALITY"}
          description={"My mission is perfect cleanliness in which every client will be happy. "}
        />
      </section>

      <div className={styles.image}>
        <Image src={bottelImage} alt="bottles image" />
      </div>
    </div>
  );
};

export default Suggests;
