import React from "react";
import styles from "./extra-information.module.scss";
import Link from "next/link";
import linksData from "../../../data/home-page/extra-information.json";

const ExtraInformation = () => {
  const { links } = linksData;
  return (
    <section className={styles.extraInformationSection}>
      <div className="container">
        <Link href="/">
          <div className={styles.links}>
            {links.map((linkText, index) => (
              <div className={styles.linkBlock}>{linkText}</div>
            ))}
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ExtraInformation;
