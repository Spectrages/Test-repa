import { FC } from "react";
import styles from "./singleSuggest.module.scss";
import Image from "next/image";
import Text from "@/components/text";

interface IProps {
  image: string;
  title: string;
  description: string;
}

const SingleSuggest: FC<IProps> = ({ image, title, description }) => {
  return (
    <div className={styles.singleSuggest}>
      <div className={styles.titleSuggest}>
        <Image src={image} alt={title} />
        <Text size="xl" weight="bold" color="orange">
          {title}
        </Text>
      </div>
      <div className={styles.descriptionSuggest}>
        <Text size="base" color="black">
          {description}
        </Text>
      </div>
    </div>
  );
};

export default SingleSuggest;
