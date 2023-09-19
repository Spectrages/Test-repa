import { FC } from "react";
import styles from "./card.module.scss";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Text from "@/components/text";
import { Button } from "@/components/button";

interface IProps {
  image: StaticImageData;
  name: string;
  isSelected: boolean;
  onOpen: () => void;
}

const Card: FC<IProps> = ({ image, name, isSelected, onOpen }) => {
  const containerClasses = isSelected ? `${styles.container} ${styles.selected}` : styles.container;
  return (
    <div className={containerClasses}>
      <Image src={image} alt={name} />
      <Text size="lg" transform="uppercase">
        {name}
      </Text>
      <Button
        className={isSelected ? styles.selectedButton : styles.button}
        onClickHandler={onOpen}
      >
        {isSelected ? "service" : "more"}
      </Button>
    </div>
  );
};

export default Card;
