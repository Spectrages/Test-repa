import styles from './address.module.scss';
import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import CategoryTitle from '../category-title/CategoryTitle';

interface IAddressProps {
  setAddressValue: Dispatch<SetStateAction<string>>;
}

const Address: React.FC<IAddressProps> = ({ setAddressValue }) => {
  const handleAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Update the state with the new value from the input field
    setAddressValue(event.target.value);
  };
  return (
    <div className={styles.address}>
      <CategoryTitle className={styles.address__title}>Address</CategoryTitle>
      <input id='address-field' className={styles.address__field} type='text' name='address' placeholder='Street'  onChange={handleAddressChange}  required/>
      <div className={styles.address__line} />
    </div>
  );
};

export default Address;