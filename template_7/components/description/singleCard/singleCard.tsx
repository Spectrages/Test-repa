import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import Text from "@/components/text";

import styles from "./singleCard.module.scss";
interface IProps {
  image: StaticImageData;
  title: string;
  description: string;
}

const SingleCard: FC<IProps> = ({ image, title, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Image src={image} alt={title} />
        <Text size="lg" weight="medium">
          {title}
        </Text>
      </div>
      <div className={styles.description}>
        <Text size="base" weight="normal">
          {description}
        </Text>
      </div>
    </div>
  );
};

export default SingleCard;
