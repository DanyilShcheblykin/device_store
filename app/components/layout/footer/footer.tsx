import React from "react";
import styles from "./footer.module.scss";
import footerInfo from "../../../data/home-page/footer.json";
import FooterNavigationBlock from "../footer-navigation-block";
import FooterPolicy from "../footer-policy";

interface FooterColumn {
  title: string;
  subTitlesArray: string[];
}

interface FooterNavigation {
  columnArray: FooterColumn[];
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterData {
  copyright: string;
  headerNavigation: FooterLink[];
  language: string;
  footerNavigation: FooterNavigation[];
}

const Footer = () => {
  const {
    copyright,
    headerNavigation,
    language,
    footerNavigation,
  }: FooterData = footerInfo.footerData;

  return (
    <footer className={`container ${styles.footerSection}`}>
      <div className={styles.footerNavigation}>
        {footerNavigation.map((column: FooterNavigation, index: number) => (
          <div
            key={`footer-column-${index}`}
            className={styles.extraNavigationBlock}
          >
            {column.columnArray.map((navigationItem, index) => (
              <FooterNavigationBlock
                key={`navigation-item-${index}`}
                {...navigationItem}
              ></FooterNavigationBlock>
            ))}
          </div>
        ))}
      </div>
      <FooterPolicy
        copyrightText={copyright}
        headerNavigation={headerNavigation}
        language={language}
      ></FooterPolicy>
    </footer>
  );
};

export default Footer;
