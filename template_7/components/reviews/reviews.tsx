import styles from "./reviews.module.scss";
import Text from "@/components/text";
import person_1 from "@/assets/images/person_1.png";
import person_2 from "@/assets/images/person_2.png";
import person_3 from "@/assets/images/person_3.png";
import person_4 from "@/assets/images/person_4.png";
import SingleReview from "./singleReview/singleReview";

const reviews = [
  {
    image: person_1,
    name: "Annabel",
    review: `I recently used for a deep cleaning of my home and I couldn't be happier with the results. The maid was professional, efficient, and thorough in her work.`,
  },
  {
    image: person_3,
    name: "Sara",
    review: `The customer service was excellent - she was quick to respond to my questions and flexible in accommodating my schedule. She paid attention to all the details and left my home spotless.`,
  },
  {
    image: person_2,
    name: "Kevin",
    review: `I've been using maid services for a few months now and I have to say, I'm thoroughly impressed. The booking process is simple and hassle-free, and the customer service is top-notch. `,
  },
  {
    image: person_4,
    name: "Hanna",
    review: `I recently used for a deep cleaning of my home and I couldn't be happier with the results. The maid was professional, efficient, and thorough in her work.`,
  },
];

const Reviews = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Text size="xxl" weight="bold" color="black" transform="uppercase">
          Reviews
        </Text>
      </div>
      <section className={styles.reviewsBlock}>
        {reviews.map((item, index) => {
          return (
            <SingleReview image={item.image} name={item.name} review={item.review} key={index} />
          );
        })}
      </section>
    </div>
  );
};

export default Reviews;
