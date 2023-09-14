import React, { Dispatch, SetStateAction, useState } from 'react';
import styles from './category.module.scss';
import CategoryTitle from '../category-title/CategoryTitle';
import Text from '@/components/text';

interface ICategoryProps {
    title: React.ReactNode;
    cleaningData: {
        children: React.ReactNode;
        id: string;
        radioName: string;
        type: string;
    }[];
    setSelectedCleaningType: (type: string | null) => void;
    setAllergyValue: Dispatch<SetStateAction<string>>;
    setVisitFrequencyValue: Dispatch<SetStateAction<string>>;
    setTypeOfCleaningValue: Dispatch<SetStateAction<string>>;
}

enum Title {
    VisitFrequency = 'Visit Frequency',
    Allergy = 'Allergy',
    TypeOfCleaning = 'Type of Cleaning'
}

enum AllergyItems {
    CAT = 'cat',
    DOG = 'dog',
    NONE = 'none'
}

const Category: React.FC<ICategoryProps> = ({ title, cleaningData, setSelectedCleaningType, setAllergyValue, setVisitFrequencyValue, setTypeOfCleaningValue }) => {
    const [selectedCat, setSelectedCat] = useState(false);
    const [selectedDog, setSelectedDog] = useState(false);
    const [selectedNone, setSelectedNone] = useState(false);

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
        if (title === Title.Allergy) {
            setAllergyValue(itemId);
        } else if (title === Title.TypeOfCleaning) {
            setTypeOfCleaningValue(itemId);
            
        } else if (title === Title.VisitFrequency) {
            setVisitFrequencyValue(itemId);
            if (itemId === 'fortnightly' || itemId === 'every_week' ) {
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
                        {title === Title.Allergy ? (
                            <input
                                id={item.id}
                                type={item.type}
                                name={item.radioName}
                                onChange={() => { setSelectedCleaningType(item.id), handleCheckBoxes(item.id), checkedItem(item.id) }}
                                checked={
                                    (item.id === AllergyItems.CAT && selectedCat) ||
                                    (item.id === AllergyItems.DOG && selectedDog) ||
                                    (item.id === AllergyItems.NONE && selectedNone)
                                }
                            />
                        ) : (
                            <input
                                id={item.id}
                                type={item.type}
                                name={item.radioName}
                                onChange={() => {setSelectedCleaningType(item.id), checkedItem(item.id) }}
                            />
                        )}
                        <label className={styles.category__label} htmlFor={item.id}>
                            <Text className={styles.category__label_text} weight='medium'>
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