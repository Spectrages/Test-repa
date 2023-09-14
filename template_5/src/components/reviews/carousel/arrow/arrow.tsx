import styles from './arrow.module.scss';
import React, { MouseEventHandler } from "react";
import cn from 'classnames';
import Image from 'next/image';
import ArrowIcon from '@/public/icons/carousel_arrow.svg'

export interface IArrowButton {
  onClick: MouseEventHandler<HTMLButtonElement>;
  isDisabled: boolean;
  arrowButtonClassName?: string | undefined;
}

const Arrow: React.FC<IArrowButton> = ({ onClick, isDisabled, arrowButtonClassName }) => {
  const arrowButton = cn(styles.arrow, arrowButtonClassName);
  const arrowIcon = cn(styles.arrow__icon);

  return (
    <button className={arrowButton} onClick={onClick} disabled={isDisabled}>
      <Image src={ArrowIcon} alt='arrow icon' className={arrowIcon} />
    </button>
  );
}

export default Arrow;