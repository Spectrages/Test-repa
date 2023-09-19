import styles from "./filterButton.module.scss";
import Text from "@/components/text";
import { Button } from "@/components/button";
import { FC } from "react";

interface IProps {
  name: string;
  description: string;
}

const FilterButton: FC<IProps> = ({ name, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Text size="lg" weight="medium" color="black" transform="uppercase">
          {name}
        </Text>
      </div>

      <div className={styles.descriptionContainer}>
        <Text size="base" weight="normal" color="black">
          {description}
        </Text>
      </div>
      <Button className={styles.button} palette="secondary">
        CHOOSE
      </Button>
    </div>
  );
};

export default FilterButton;
