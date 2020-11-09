import React, { FunctionComponent } from 'react';
import styles from './header.module.scss';

type HeaderProps = {
  title?: string;
  heading: string;
};

const Header: FunctionComponent<HeaderProps> = ({
  title,
  heading,
  children,
}) => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrap_left}>
          <div className={styles.title}>{title}</div>
          <h1>{heading}</h1>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Header;
