import React from 'react';
import styles from './header.module.scss';

export default function Header({ title, heading, children }) {
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
}
