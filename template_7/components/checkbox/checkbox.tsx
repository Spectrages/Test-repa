import React, { FC } from "react";
import styles from "./checkbox.module.scss";
import cn from "classnames";

interface IProps {
  name: string;
  label: string | undefined;
  className?: string;
  onChange?: () => void;
}

const Checkbox: FC<IProps> = ({ name, label, className, onChange }) => {
  return (
    <div className={cn(styles.checkbox, className)}>
      <input type="radio" id={label} name={name} onChange={onChange} />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default Checkbox;
