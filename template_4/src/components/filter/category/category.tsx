import React, { Dispatch, SetStateAction, useState } from 'react';
import styles from './category.module.scss';
import CategoryTitle from '../categoryTitle/categoryTitle';
import Text from '@/components/text';
import { useTranslation } from 'next-i18next';

interface ICategoryProps {
    title: React.ReactNode;
    cleaningData: {
        children: React.ReactNode;
        id: string;
        radioName: string;
        type: string;
    }[];
    setSelectedCleaningType: (type: string | null) => void;
    setVisitFrequencyValue: Dispatch<SetStateAction<string>>;
    setTypeOfCleaningValue: Dispatch<SetStateAction<string>>;
    isDisableOneTimeCleaning: boolean;
    setSelectedAllergies: Dispatch<SetStateAction<string[]>>;
}

enum AllergyItems {
    CAT = 'cat',
    DOG = 'dog',
    NONE = 'none'
}

const Category: React.FC<ICategoryProps> = ({ title, cleaningData, setSelectedCleaningType, setVisitFrequencyValue, setTypeOfCleaningValue, isDisableOneTimeCleaning, setSelectedAllergies }) => {
    const { t } = useTranslation(["filters", "common"]);
    const [selectedCat, setSelectedCat] = useState(false);
    const [selectedDog, setSelectedDog] = useState(false);
    const [selectedNone, setSelectedNone] = useState(false);

    const allergyTitle = t(`allergy_title`);
    const typeOfCleaningTitle = t(`cleaning_title`);
    const frequencyTitle = t(`frequency_title`);

    const handleCheckBoxes = (itemId: string) => {
        if (itemId === AllergyItems.CAT) {
            setSelectedCat(true);
            setSelectedNone(false);
        } else if (itemId === AllergyItems.DOG) {
            setSelectedDog(true);
            setSelectedNone(false);
        } else if (itemId === AllergyItems.NONE) {
            setSelectedCat(false);
            setSelectedDog(false);
            setSelectedNone(true);
        }
    }

    const checkedItem = (itemId: string) => {
        if (title === allergyTitle) {
            setSelectedAllergies((prevSelectedAllergies) => {
                if (itemId === 'cat' || itemId === 'dog') {
                    return prevSelectedAllergies.filter((data) => data !== "none").concat(itemId);
                } else {
                    return [itemId];
                }
            });
        } else if (title === typeOfCleaningTitle) {
            setTypeOfCleaningValue(itemId);
        } else if (title === frequencyTitle) {
            setVisitFrequencyValue(itemId);
            if (itemId === 'fortnightly' || itemId === 'every_week') {
                setTypeOfCleaningValue('');
            }
        }
    };

    return (
        <div className={styles.category}>
            <CategoryTitle className={styles.category__title}>{title}</CategoryTitle>
            <div className={styles.category__list}>
                {cleaningData.map((item, index) => (
                    <div key={index}>
                        {title === allergyTitle ? (
                            <input
                                id={item.id}
                                type={item.type}
                                name={item.radioName}
                                checked={
                                    (item.id === AllergyItems.CAT && selectedCat) ||
                                    (item.id === AllergyItems.DOG && selectedDog) ||
                                    (item.id === AllergyItems.NONE && selectedNone)
                                }
                                onChange={() => { setSelectedCleaningType(item.id), handleCheckBoxes(item.id), checkedItem(item.id) }}
                            />
                        ) : (
                            <input
                                id={item.id}
                                type={item.type}
                                name={item.radioName}
                                onChange={() => { setSelectedCleaningType(item.id), checkedItem(item.id) }}
                                disabled={isDisableOneTimeCleaning && title === typeOfCleaningTitle}
                            />
                        )}
                        <label className={styles.category__label} htmlFor={item.id}>
                            <Text className={styles.category__label_text} weight='medium' color='white' size='xs'>
                                {item.children}
                            </Text>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;