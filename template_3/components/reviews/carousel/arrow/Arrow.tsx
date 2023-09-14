import styles from './arrow.module.scss';
import React, { MouseEventHandler } from "react";
import cn from 'classnames';

export interface IArrowButton {
  onClick: MouseEventHandler<HTMLButtonElement>;
  direction: React.ReactNode;
}

enum ArrowDirection {
  LEFT = 'left',
  RIGHT = 'right',
}

const Arrow: React.FC<IArrowButton> = ({ onClick, direction }) => {
  let arrowClass = styles.arrow;
  
  switch (direction) {
    case ArrowDirection.LEFT:
      arrowClass = cn(styles.arrow, styles.arrow__left);
      break;
    case ArrowDirection.RIGHT:
      arrowClass = cn(styles.arrow, styles.arrow__right);
      break;
    default:
      break;
  }

  return (
    <button className={arrowClass} onClick={onClick}></button>
  );
}

export default Arrow;