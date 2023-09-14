import React from 'react';
import styles from './human-card-arrow.module.scss';

interface IHumanCardArrowProps {
    onClick: () => void;
}

const HumanCardArrow: React.FC<IHumanCardArrowProps> = ({ onClick }) => {
    const arrowClassNames = styles.human_card_arrow;

    return (
        <div className={arrowClassNames} onClick={onClick}></div>
    );
};

export default HumanCardArrow;