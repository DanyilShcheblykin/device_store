import React from "react";
import styles from "./footer-policy.module.scss";
import { FooterLink } from "../footer/footer";
import Image from "next/image";
import Globe from "../../../../public/assets/layout/globe.svg";
import Link from "next/link";

interface FooterPolicyProps {
  copyrightText: string;
  headerNavigation: FooterLink[];
  language: string;
}

const FooterPolicy = ({ copyrightText, headerNavigation, language }:FooterPolicyProps) => {
  return (
    <div className={styles.footerPolicy}>
      <>
        <span className={styles.text}>{copyrightText}</span>
        <div className={styles.footerMenu}>
          {headerNavigation.map((linkData: FooterLink, index: number) => (
            <FooterLink key={`footer-link-${index}`} {...linkData}></FooterLink>
          ))}
        </div>
      </>
      <div className={styles.languageBlock}>
        <Image alt="globe" src={Globe}></Image>
        <span className={styles.language}>{language}</span>
      </div>
    </div>
  );
};

export default FooterPolicy;

const FooterLink = ({ href, label }: FooterLink) => {
  return (
    <Link href={href}>
      <span className={styles.menuLink}>{label}</span>
    </Link>
  );
};
