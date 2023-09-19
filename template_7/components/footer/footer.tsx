import styles from "./footer.module.scss";
import Text from "@/components/text";
import { Button } from "@/components/button";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 358" fill="none">
          <path
            d="M1478.92 17.0101C1951.5 73 1920 186.5 1920 358H0.00256348V138.034C99.0199 178.597 254.877 -31.4786 429.654 4.07126C608.545 40.4577 670.086 61.577 861.911 84.4373C1043.18 124.352 1341.5 14 1478.92 17.0101Z"
            fill="white"
          />
        </svg>
      </div>
      <div className={styles.title}>
        <Text size="xxl" weight="bold" transform="uppercase">
          Contacts
        </Text>
      </div>
      <div className={styles.buttonsGroup}>
        <Button palette="secondary" className={styles.button}>
          Viber
        </Button>
        <Button palette="secondary" className={styles.button}>
          WhatsApp
        </Button>
        <Button palette="secondary" className={styles.button}>
          Telegram
        </Button>
      </div>
    </div>
  );
};

export default Footer;
