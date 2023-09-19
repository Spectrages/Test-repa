import { StaticImageData } from "next/image";
import styles from "./singleCardData.module.scss";
import { FC } from "react";
import Image from "next/image";
import Text from "@/components/text";

interface ISingleCard {
  image: StaticImageData | undefined;
  name: string | undefined;
  title: string | undefined;
  description: string[] | undefined;
  className?: string;
}

const SingleCardData: FC<ISingleCard> = ({ image, name, description, title }) => {
  return (
    <>
      {image && name && description && title && (
        <div className={styles.container}>
          <Image src={image} alt={name} />
          <div className={styles.content}>
            <div className={styles.title}>
              <Text size="lg" weight="medium" transform="capitalize">
                {title}
              </Text>
            </div>
            <ul className={styles.list}>
              {description.map((item, index) => (
                <li key={index}>
                  <Text size="base" weight="normal" transform="capitalize" align="left">
                    {item}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleCardData;
