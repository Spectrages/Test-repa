import styles from './address.module.scss';
import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'next-i18next';

interface IAddressProps {
  setAddressValue: Dispatch<SetStateAction<string>>;
}

const Address: React.FC<IAddressProps> = ({ setAddressValue }) => {
  const handleAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressValue(event.target.value);
  };
  const { t } = useTranslation(["filters", "common"]);
  return (
    <div className={styles.address}>
      <div className={styles.address__field}>
        <input id='address-field' type='text' name='address' placeholder={t("address_placeholder")}  onChange={handleAddressChange}  required/>
      </div>
    </div>
  );
};

export default Address;