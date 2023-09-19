import styles from "./description.module.scss";
import Text from "@/components/text";

import schedule from "@/assets/images/schedule_soft.png";
import clock from "@/assets/images/clock_soft.png";
import security from "@/assets/images/security_verified.png";
import bucket from "@/assets/images/bucket_for_washing.png";
import SingleCard from "./singleCard/singleCard";

const descriptions = [
  {
    image: schedule,
    title: "Customizable services",
    description: "Customizable cleaning services to meet your specific preferences",
  },
  {
    image: clock,
    title: "Time-saving solution",
    description: "Save you time and effort by taking care of the cleaning for you",
  },
  {
    image: bucket,
    title: "Thorough cleaning",
    description: "Provide thorough cleaning services",
  },
  {
    image: security,
    title: "Consistent results",
    description: "Striving for consistent purity level results",
  },
];

const Description = () => {
  return (
    <div className={styles.container}>
      <section className={styles.titleBlock}>
        <Text size="xxl" weight="bold" color="black" transform="uppercase">
          Let me help you keep your home spotless
        </Text>
        <Text size="lg" weight="normal" color="black" transform="uppercase">
          Schedule cleaning services at your convenience, whether it&apos;s a one-time deep clean or
          regular weekly visits.
        </Text>
      </section>
      <section className={styles.cardsBlock}>
        {descriptions.map((item, index) => {
          return (
            <SingleCard
              image={item.image}
              title={item.title}
              description={item.description}
              key={index}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Description;
