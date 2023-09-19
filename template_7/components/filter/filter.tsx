import { checkboxAllergies, checkboxCleaning, checkboxFilters } from "./variants";
import { useState } from "react";
import { Button } from "@/components/button";
import Text from "@/components/text";
import Image from "next/image";
import broom from "@/assets/images/broom.png";

import styles from "./filter.module.scss";

const enum FilterTypes {
  filters = "filters",
  cleaning = "cleaning",
  allergies = "allergies",
}

const Filter = () => {
  const [selectedCheckboxFilters, setSelectedCheckboxFilters] = useState<string | null>(null);
  const [selectedCheckboxAllergies, setSelectedCheckboxAllergies] = useState<string | null>(null);
  const [selectedCheckboxCleaning, setSelectedCheckboxCleaning] = useState<string | null>(null);

  const handleCheckboxChange = (name: string, type: string) => {
    switch (type) {
      case FilterTypes.filters:
        return setSelectedCheckboxFilters((prev) => (prev === name ? null : name));
      case FilterTypes.allergies:
        return setSelectedCheckboxAllergies((prev) => (prev === name ? null : name));
      case FilterTypes.cleaning:
        return setSelectedCheckboxCleaning((prev) => (prev === name ? null : name));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={broom} alt="broom" />
      </div>
      <div className={styles.title}>
        <Text size="xxl" weight="bold" color="black" transform="uppercase">
          Filter
        </Text>
      </div>
      <section className={styles.filterContent}>
        <div className={styles.columns}>
          <div className={styles.column}>
            <Text size="lg" weight="medium" transform="capitalize">
              cleaning
            </Text>
            <div className={styles.singleColumn}>
              {checkboxFilters.map((item, index) => {
                return (
                  <div className={styles.checkbox} key={index}>
                    <input
                      type="checkbox"
                      id={`${item}-${index}`}
                      name={item}
                      checked={selectedCheckboxFilters === item}
                      onChange={() => handleCheckboxChange(item, FilterTypes.filters)}
                    />
                    <label htmlFor={`${item}-${index}`}>
                      <Text size="base" weight="normal" transform="capitalize">
                        {item}
                      </Text>
                    </label>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.column}>
            <Text size="lg" weight="medium" transform="capitalize">
              allergies
            </Text>
            <div className={styles.singleColumn}>
              {checkboxAllergies.map((item, index) => {
                return (
                  <div className={styles.checkbox} key={index}>
                    <input
                      type="checkbox"
                      id={`${item}-${index}`}
                      name={item}
                      checked={selectedCheckboxAllergies === item}
                      onChange={() => handleCheckboxChange(item, FilterTypes.allergies)}
                    />
                    <label htmlFor={`${item}-${index}`}>
                      <Text size="base" weight="normal" transform="capitalize">
                        {item}
                      </Text>
                    </label>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.column}>
            <Text size="lg" weight="medium" transform="capitalize">
              type of cleaning
            </Text>
            <div className={styles.singleColumn}>
              {checkboxCleaning.map((item, index) => {
                return (
                  <div className={styles.checkbox} key={index}>
                    <input
                      type="checkbox"
                      id={`${item}-${index}`}
                      name={item}
                      checked={selectedCheckboxCleaning === item}
                      onChange={() => handleCheckboxChange(item, FilterTypes.cleaning)}
                    />
                    <label htmlFor={`${item}-${index}`}>
                      <Text size="base" weight="normal" transform="capitalize">
                        {item}
                      </Text>
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.addressBlock}>
          <Text size="lg" weight="medium" transform="capitalize">
            address
          </Text>
          <input type="text" className={styles.addressInput} placeholder="street" />
        </div>
      </section>
      <div className={styles.buttonBlock}>
        <Button palette="secondary" className={styles.button}>
          search
        </Button>
      </div>
    </div>
  );
};

export default Filter;
