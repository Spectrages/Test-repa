import React from 'react';
import styles from './human-card.module.scss';
import HumanCardArrow from './human-card-arrow/HumanCardArrow';
import HumanCardImage from './human-card-image/HumanCardImage';
import HumanCardDescription from './human-card-description/HumanCardDescription';
import cn from 'classnames';
import { StaticImageData } from 'next/image';

interface IHumanCardProps {
    className?: string;
    source: StaticImageData;
    name: string;
    age: string;
    starNumber: string;
    isActive: boolean;
    onNextClick: () => void;
}

const HumanCard: React.FC<IHumanCardProps> = ({ className, source, name, age, starNumber, isActive, onNextClick }) => {
    const humanCardClassNames = cn(styles.human_card, className, {
        [styles.active!]: isActive,
    });

    return (
        <div className={humanCardClassNames}>
            <HumanCardArrow onClick={onNextClick} />
            <HumanCardImage source={source} />
            <HumanCardDescription name={name} age={age} starNumber={starNumber} />
            <div className={styles.human_card__center_card}></div>
            <div className={styles.human_card__last_card}></div>
        </div>
    );
};

export default HumanCard;