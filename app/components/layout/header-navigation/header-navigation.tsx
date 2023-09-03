"use client";
import React, { useState } from "react";
import styles from "./header-navigation.module.scss";
import HeaderLink from "./header-link/header-link";
import headerLinksData from "../../../data/home-page/header.json";

export interface HeaderLinkData {
  label: string;
  href: string;
}

const arrowIndex: number = 1;

const HeaderNavigation = () => {
  const [activePage, setActivePage] = useState<number>(0);
  const { headerNavigation }: { headerNavigation: HeaderLinkData[] } =
    headerLinksData;

  const makeActiveLink = (index: number) => {
    setActivePage(index);
  };

  return (
    <nav className={styles.navigationBlock}>
      <ul className={styles.links}>
        {headerNavigation.map((link: HeaderLinkData, index: number) => (
          <HeaderLink
            key={`header-link-${index}`}
            {...link}
            showArrow={index === arrowIndex}
            activePage={activePage === index}
            makeActiveLink={makeActiveLink}
            linkIndex={index}
          />
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
