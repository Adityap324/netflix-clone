import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <img src="/assets/netflix-logo.png" alt="Netflix Logo" className={styles.logoImage} />
        </Link>
      </div>
      <div className={styles.nav}>
        <Link href="/browse">Home</Link>
        <Link href="/browse">TV Shows</Link>
        <Link href="/browse">Movies</Link>
        <Link href="/browse">New & Popular</Link>
        <Link href="/browse">My List</Link>
      </div>
      <div className={styles.icons}>
        <img src="/assets/profile-icon.png" alt="Profile" className={styles.profileIcon} />
      </div>
    </header>
  );
};

export default Header;
