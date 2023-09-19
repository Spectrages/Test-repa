import { Button } from "@/components/button";
import styles from "./header.module.scss";
import Text from "@/components/text";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <Text size="xxl" weight="bold" transform="uppercase">
            Looking for a reliable and efficient maid service?
          </Text>
          <Text size="lg" weight="normal">
            I will work closely with you to provide a customized cleaning experience, leaving your
            home sparkling clean every time.
          </Text>
          <Button palette="secondary" className={styles.button}>
            Go to filter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
