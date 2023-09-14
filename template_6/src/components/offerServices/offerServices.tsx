import styles from './offerServices.module.scss';
import Text from '../text';
import { useTranslation } from 'next-i18next';

const OfferServices = () => {
  const { t } = useTranslation(["common"]);
  return (
    <div className={styles.offer_services}>
      <div className={styles.container}>
          <Text className={styles.offer_services__title} color='black' align='center' transform='uppercase'>
            {t("offer_services")}
          </Text>
      </div>
    </div>
  );
};

export default OfferServices;