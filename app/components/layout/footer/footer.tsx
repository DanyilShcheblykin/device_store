import React from "react";
import styles from "./footer.module.scss";
import Link from "next/link";
import Globe from "../../../../public/assets/layout/globe.svg";
import Image from "next/image";
import footerInfo from "../../../data/home-page/footer.json";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterData {
  copyright: string;
  headerNavigation: Array<FooterLink>;
  language: string;
}

const Footer = () => {
  const { copyright, headerNavigation, language }: FooterData =
    footerInfo.footerData;

  return (
    <footer className={`container ${styles.footerSection}`}>
      <div className={styles.footerBlock}>
        <div>
          <span className={styles.text}>{copyright}</span>
          <div className={styles.footerMenu}>
            {headerNavigation.map((linkData: FooterLink, index: number) => (
              <FooterLink
                key={`footer-link-${index}`}
                {...linkData}
              ></FooterLink>
            ))}
          </div>
        </div>
        <div className={styles.languageBlock}>
          <Image alt="globe" src={Globe}></Image>
          <span className={styles.language}>{language}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const FooterLink = ({ href, label }: FooterLink) => {
  return (
    <Link href={href}>
      <span className={styles.menuLink}>{label}</span>
    </Link>
  );
};
