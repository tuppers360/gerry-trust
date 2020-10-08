import React, { useState } from "react";
import Link from "next/link";
import styles from "./nav.module.scss";

function Nav() {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className={styles.navbar}>
      <ul className={styles.menu}>
        <li className={styles.logo}>
          <Link href="/">
            <a>Gerry Richardson</a>
          </Link>
        </li>
        <li
          className={
            isActive
              ? `${styles.navitem} ${styles.active}`
              : `${styles.navitem}`
          }
          onClick={() => setIsActive(!isActive)}
        >
          <Link href="/stories">Stories</Link>
        </li>
        <li
          className={
            isActive
              ? `${styles.navitem} ${styles.active}`
              : `${styles.navitem}`
          }
          onClick={() => setIsActive(!isActive)}
        >
          <Link href="/#">News (coming soon)</Link>
        </li>
        <li
          className={
            isActive
              ? `${styles.navitem} ${styles.active}`
              : `${styles.navitem}`
          }
          onClick={() => setIsActive(!isActive)}
        >
          <Link href="/about">About</Link>
        </li>
        <li
          className={
            isActive
              ? `${styles.navitem} ${styles.active}`
              : `${styles.navitem}`
          }
          onClick={() => setIsActive(!isActive)}
        >
          <Link href="/contact">Contact Us</Link>
        </li>
        <li className={`${styles.navitem} ${styles.button} ${styles.donate}`}>
          <Link href="/donate">
            <a>Donate</a>
          </Link>
        </li>
        <li className="toggle" onClick={() => setIsActive(!isActive)}>
          <span>
            <i className="fas fa-bars"></i>
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
