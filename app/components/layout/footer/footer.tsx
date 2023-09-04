import React from "react";
import styles from "./footer.module.scss";
import footerInfo from "../../../data/home-page/footer.json";
import FooterNavigationBlock from "../footer-navigation-block";
import FooterPolicy from "../footer-policy";

interface FooterNaviagtionItem {
  title: string;
  subTitlesArray: Array<string>;
}

interface FooterNavigation {
  shopLearn: FooterNaviagtionItem;
  appleStore: FooterNaviagtionItem;
  forBusiness: FooterNaviagtionItem;
  forEducation: FooterNaviagtionItem;
  forHealthcare: FooterNaviagtionItem;
  entertainment: FooterNaviagtionItem;
  appleWallet: FooterNaviagtionItem;
  account: FooterNaviagtionItem;
}

export interface FooterLink {
  label: string;
  href: string;
}

interface FooterData {
  copyright: string;
  headerNavigation: Array<FooterLink>;
  language: string;
  footerNavigation: FooterNavigation;
}

const Footer = () => {
  const {
    copyright,
    headerNavigation,
    language,
    footerNavigation,
  }: FooterData = footerInfo.footerData;

  const {
    shopLearn,
    appleStore,
    forBusiness,
    forEducation,
    forHealthcare,
    entertainment,
    appleWallet,
    account,
  } = footerNavigation;

  return (
    <footer className={`container ${styles.footerSection}`}>
      <div className={styles.footerNavigation}>
        <FooterNavigationBlock {...shopLearn}></FooterNavigationBlock>
        <FooterNavigationBlock {...appleStore}></FooterNavigationBlock>
        <div className={styles.extraNavigationBlock}>
          <FooterNavigationBlock {...forBusiness}></FooterNavigationBlock>
          <FooterNavigationBlock {...forEducation}></FooterNavigationBlock>
          <FooterNavigationBlock {...forHealthcare}></FooterNavigationBlock>
        </div>
        <FooterNavigationBlock {...entertainment}></FooterNavigationBlock>
        <div className={styles.extraNavigationBlock}>
          <FooterNavigationBlock {...appleWallet}></FooterNavigationBlock>
          <FooterNavigationBlock {...account}></FooterNavigationBlock>
        </div>
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
