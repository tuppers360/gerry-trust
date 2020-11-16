import React, { FunctionComponent } from 'react';
import styles from './header.module.scss';

type HeaderProps = {
  title?: string;
  heading: string;
  center?: boolean;
};

const Header: FunctionComponent<HeaderProps> = ({
  title,
  heading,
  center,
  children,
}) => {
  return (
    <div className={styles.header}>
      <div
        className={
          center
            ? `${styles.container} ${styles.center}`
            : `${styles.container}`
        }
      >
        <div
          className={center ? `${styles.wrap_center}` : `${styles.wrap_left}`}
        >
          <div className={styles.title}>{title}</div>
          <h1>{heading}</h1>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Header;
