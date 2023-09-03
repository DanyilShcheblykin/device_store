import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "./header.module.scss";
import HeaderButton from "../header-button";
import HeaderNavigation from "../header-navigation";
import SearchIcon from "../../../../public/assets/header/search-icon.svg";
import BasketIcon from "../../../../public/assets/header/basket-icon.svg";
import ProfileIcon from "../../../../public/assets/header/profile-icon.svg";
import AppleIcon from "../../../../public/assets/header/apple-icon.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderNavigation></HeaderNavigation>
      <div className={styles.searchBlock}>
        <div className={styles.headerIcon}>
          <Image alt="apple-icon" src={AppleIcon}></Image>
        </div>

        <div className={styles.searchInputBlock}>
          <Image
            className={styles.searchIcon}
            alt="search-icon"
            src={SearchIcon}
          ></Image>
          <input
            placeholder="Search"
            type="text"
            className={styles.searchInput}
          />
        </div>
        <Link href="/">
          <HeaderButton image={BasketIcon} alt="basket-icon"></HeaderButton>
        </Link>
        <HeaderButton image={ProfileIcon} alt="profile-icon"></HeaderButton>
      </div>
    </header>
  );
};

export default Header;
