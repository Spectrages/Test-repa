import React, { useEffect, useState } from "react";
import styles from "./filter.module.scss";
import Button from "../button/Button";
import HumanCard from "./human-card/HumanCard";
import Category from "./category/Category";
import Address from "./address/Address";
import VisitFrequencyData from "./cleaning-data/VisitFrequencyData";
import AllergyData from "./cleaning-data/AllergyData";
import TypeOfCleaningData from "./cleaning-data/TypeOfCleaningData";
import Text from "../text";
import HumanCardData from "./human-card-data/HumanCardData";
import janeImage from "@/public/images/jane.png";
import {
  fetchGetWorkerInfo,
  GetWorkerInfo,
  useAppDispatch,
  useAppSelector,
} from "@hosting2023/redux-lib";
import { IGetWorkerResponse } from "@hosting2023/redux-lib/dist/src/utils/types/interfaces/get-worker.interface";

interface FilterProps {
  setWorkers: React.Dispatch<React.SetStateAction<IGetWorkerResponse>>;
}

const Filter: React.FC<FilterProps> = ({ setWorkers }) => {
  const dispatch = useAppDispatch();
  const workers = useAppSelector(GetWorkerInfo);

  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [visitFrequencyValue, setVisitFrequencyValue] = useState("");
  const [allergyValue, setAllergyValue] = useState("");
  const [typeOfCleaningValue, setTypeOfCleaningValue] = useState("");
  const [addressValue, setAddressValue] = useState("");
  const [isSearchClicked, setIsSearchClicked] = useState(false); // Состояние для отслеживания нажатия кнопки "Search"

  let isDisabledButton = true;

  const [categoryData, setCategoryData] = useState([
    { title: "Visit Frequency", cleaningData: VisitFrequencyData },
    { title: "Allergy", cleaningData: AllergyData },
  ]);

  if (visitFrequencyValue && allergyValue && addressValue) {
    if (visitFrequencyValue === "fortnightly" || visitFrequencyValue === "every_week") {
      isDisabledButton = false;
    } else if (visitFrequencyValue === "one_time_cleaning" && typeOfCleaningValue) {
      isDisabledButton = false;
    }
  } else {
    isDisabledButton = true;
  }

  const requestData = {
    frequency: visitFrequencyValue,
    allergy: allergyValue,
    type: typeOfCleaningValue,
    address: addressValue,
  };

  useEffect(() => {
    if (isSearchClicked) {
      dispatch(fetchGetWorkerInfo(requestData))
    }
  }, [isSearchClicked]);


  const handleCleaningTypeChange = (newCleaningType: string | null) => {
    if (newCleaningType === "one_time_cleaning") {
      setCategoryData((prevCategoryData) => [
        ...prevCategoryData,
        { title: "Type of Cleaning", cleaningData: TypeOfCleaningData },
      ]);
    } else if (newCleaningType === "fortnightly" || newCleaningType === "every_week") {
      setCategoryData((prevCategoryData) =>
        prevCategoryData.filter((data) => data.title !== "Type of Cleaning")
      );
    }
  };

  const workerArray: IGetWorkerResponse[] = [];
  if (workers !== null) {
    workerArray.push(workers);
  }

  const handleCardClick = (index: number) => {
    if (index === HumanCardData.length - 1) {
      index = 0;
      setActiveCardIndex(index);
    } else {
      setActiveCardIndex(index + 1);
    }
  };

  const handleSearch = () => {
    setIsSearchClicked(true);
    if (workers !== null) {
      setWorkers(workers);
    }
  };

  return (
    <div id="schedule" className={styles.filter}>
      <div className={styles.container}>
        <Text className={styles.filter__title} size="xl" weight="bold">
          Filter
        </Text>
        <div className={styles.filter__main_section}>
          <div className={styles.filter__human_cards}>
            {workerArray?.map((worker, index) => (
              <HumanCard
                key={index}
                className={styles.filter__human_card}
                source={janeImage}
                name={`${worker[0]?.profile.firstName} ${worker[0]?.profile.lastName}`}
                age="30 years"
                starNumber="5"
                isActive={index === activeCardIndex}
                onNextClick={() => handleCardClick(index)}
              />
            ))}
          </div>
          <div className={styles.filter__main_categories}>
            <div className={styles.filter__categories}>
              {categoryData.map((data, index) => (
                <Category
                  key={index}
                  title={data.title}
                  cleaningData={data.cleaningData}
                  setSelectedCleaningType={handleCleaningTypeChange}
                  setVisitFrequencyValue={setVisitFrequencyValue}
                  setAllergyValue={setAllergyValue}
                  setTypeOfCleaningValue={setTypeOfCleaningValue}
                />
              ))}
            </div>
            <Address setAddressValue={setAddressValue} />
          </div>
        </div>
        <Button
          name={""}
          onClick={() => handleSearch()}
          type={"primary-usual-button"}
          isDisabled={isDisabledButton}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default Filter;
