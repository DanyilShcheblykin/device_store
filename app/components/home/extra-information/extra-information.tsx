import React from "react";
import styles from "./extra-information.module.scss";
import Link from "next/link";
import linksData from "../../../data/home-page/extra-information.json";

const ExtraInformation = () => {
  const { links } = linksData;
  return (
    <section className={styles.extraInformationSection}>
      <div className="container">
        <div className={styles.links}>
          {links.map((linkText:string, index:number) => (
            <Link key={`link-text-${index}`} href="/">
              <div className={styles.linkBlock}>{linkText}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraInformation;
