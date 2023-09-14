import styles from './address.module.scss';
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import Text from '@/components/text';
import { useTranslation } from 'next-i18next';
import { Button } from '@/components/button';
import Image from 'next/image';
import PenIcon from '@/public/icons/placeholder_pen.svg';

interface IAddressProps {
  setAddressValue: Dispatch<SetStateAction<string>>;
  handleSearch: () => void;
  isDisabledButton: boolean
}

const Address: React.FC<IAddressProps> = ({ setAddressValue, handleSearch, isDisabledButton }) => {
  const [visiblePlaceholdePen, setVisiblePlaceholdePen] = useState(true);
  const handleAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setAddressValue(inputValue);

    if (inputValue.trim() !== '') {
      setVisiblePlaceholdePen(false);
    } else {
      setVisiblePlaceholdePen(true);
    }
  };

  const { t } = useTranslation(["filters", "common"]);
  return (
    <div className={styles.address}>
      <Text className={styles.address__title} color='white' size='sm'>
        {t("address_title")}
      </Text>
      <div className={styles.address__field}>
        <div className={styles.address__input_container}>
          <input id='address-field' type='text' name='address' onChange={handleAddressChange} required />
          <Image className={styles.address__placeholder_pen} src={PenIcon} alt='pen' style={{ display: visiblePlaceholdePen ? 'block' : 'none' }} />
        </div>
        <Button
          className={styles.button}
          onClickHandler={() => handleSearch()}
          disabled={isDisabledButton}
        >
          <Text className={styles.button__text} color='white' weight='medium'>
            {t("search_btn", { ns: "common" })}
          </Text>
        </Button>
      </div>
    </div>
  );
};

export default Address;
