import React from 'react';

const styles = require('./Radio.scss');

export interface RadioProps {
  id?: string;
  name: string;
  checked?: boolean;
}

export const Radio: React.FunctionComponent<RadioProps> = ({ id, name, children }) => {
  return (
    <div className={styles.container}>
      <input type="radio" name={name} id={id || name} />
      <label htmlFor={id || name}>
        <div className={styles.content}>{children}</div>
      </label>
    </div>
  );
};
