// TODO change interface IGetWorkerRequest

import React, { useEffect, useState } from "react";
import styles from "./filter.module.scss";
import Button from "../button/button";
import Category from "./category/category";
import Address from "./address/address";
import Text from "../text";
import {
  fetchGetWorkerInfo,
  useAppDispatch,
} from "@hosting2023/redux-lib";
import { IGetWorkerResponse } from "@hosting2023/redux-lib/dist/src/utils/types/interfaces/get-worker.interface";
import { useTranslation } from "next-i18next";

interface FilterProps {
  setWorkers: React.Dispatch<React.SetStateAction<IGetWorkerResponse>>;
}

interface ICleaningData {
  children: React.ReactNode;
  id: string;
  radioName: string;
  type: string;
}[]

const Filter: React.FC<FilterProps> = ({ setWorkers }) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation(["filters", "common"]);

  const [visitFrequencyValue, setVisitFrequencyValue] = useState("");
  const [typeOfCleaningValue, setTypeOfCleaningValue] = useState("");
  const [addressValue, setAddressValue] = useState("");
  const [isClickedButton, setClickedButton] = useState(false);
  const [isDisableOneTimeCleaning, setDisableOneTimeCleaningSelected] = useState(true);
  const [selectedAllergies, setSelectedAllergies] = useState<string[]>([]);

  let isDisabledButton = true;

  const AllergyData: ICleaningData[] = [];
  const allergyId: string[] = ['none', 'cat', 'dog'];
  const VisitFrequencyData: ICleaningData[] = [];
  const frequencyId: string[] = ['one_time_cleaning', 'fortnightly', 'every_week'];
  const TypeOfCleaningData: ICleaningData[] = [];
  const cleaningId: string[] = ['regular_cleaning', 'window_cleaning', 'after_repairing', 'after_relocation'];

  allergyId.forEach((id, index) => {
    AllergyData.push({
      children: t(`allergy_${index + 1}`),
      id: id,
      radioName: 'allergy',
      type: 'checkbox'
    });
  })

  frequencyId.forEach((id, index) => {
    VisitFrequencyData.push({
      children: t(`frequency_${index + 1}`),
      id: id,
      radioName: 'visitFrequency',
      type: 'radio'
    });
  })

  cleaningId.forEach((id, index) => {
    TypeOfCleaningData.push({
      children: t(`cleaning_${index + 1}`),
      id: id,
      radioName: 'typeOfCleaning',
      type: 'radio'
    });
  })

  const categoryData = [
    { title: t(`allergy_title`), cleaningData: AllergyData },
    { title: t(`frequency_title`), cleaningData: VisitFrequencyData },
    { title: t(`cleaning_title`), cleaningData: TypeOfCleaningData },
  ];

  if (visitFrequencyValue && selectedAllergies.length && addressValue) {
    if (visitFrequencyValue === "fortnightly" || visitFrequencyValue === "every_week") {
      isDisabledButton = false;
    } else if (visitFrequencyValue === "one_time_cleaning" && typeOfCleaningValue) {
      isDisabledButton = false;
    }
  } else {
    isDisabledButton = true;
  }

  const handleCleaningTypeChange = (newCleaningType: string | null) => {
    if (newCleaningType === "one_time_cleaning") {
      setDisableOneTimeCleaningSelected(false);
    } else if (newCleaningType === "fortnightly" || newCleaningType === "every_week") {
      setDisableOneTimeCleaningSelected(true);
    }
  };

  const handleSearch = () => {
    setClickedButton(true);
  };

  useEffect(() => {
    if (isClickedButton) {
      const fetchData = async () => {
        const requestData = {
          frequency: visitFrequencyValue,
          allergy: selectedAllergies,
          type: typeOfCleaningValue,
          address: addressValue,
        };

        // @ts-ignore
        const action = await dispatch(fetchGetWorkerInfo(requestData));
        if (fetchGetWorkerInfo.fulfilled.match(action)) {
          const response = action.payload;
          setWorkers(response);
        }
      };
      fetchData();
    }
  }, [dispatch, isClickedButton, setWorkers, visitFrequencyValue, selectedAllergies, typeOfCleaningValue, addressValue]);

  return (
    <div id="filter" className={styles.filter}>
      <div className={styles.container}>
        <Text className={styles.filter__title} size="xxl" weight="semiBold" transform="uppercase">
          {t("filter", { ns: "common" })}
        </Text>

            <div className={styles.filter__categories}>
              {categoryData.map((data, index) => (
                <Category
                  key={index}
                  title={data.title}
                  cleaningData={data.cleaningData}
                  setSelectedCleaningType={handleCleaningTypeChange}
                  setVisitFrequencyValue={setVisitFrequencyValue}
                  setTypeOfCleaningValue={setTypeOfCleaningValue}
                  isDisableOneTimeCleaning={isDisableOneTimeCleaning}
                  setSelectedAllergies={setSelectedAllergies}
                />
              ))}
              
            </div>
            <Address setAddressValue={setAddressValue} />
            <Button
              className={styles.button}
              onClickHandler={() => handleSearch()}
              disabled={isDisabledButton}
            >
              {t("search_btn", { ns: "common" })}
            </Button>
        </div>
    
    </div>
  );
};

export default Filter;
