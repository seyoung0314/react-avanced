import React, { forwardRef } from 'react';
import styles from './Input.module.scss';

const InputCompornent = ({ label, inputAttr },ref) => {
  return (
    <div className={styles.input}>
      <label>{label}</label>
      <input ref={ref} {...inputAttr} />
    </div>
  );
};
const Input = forwardRef(InputCompornent);

export default Input;