import React from "react";
import styles from "./introduction.module.scss";
import Image from "next/image";
import IntoductionImage from "../../../../public/assets/home/introduction/virtual-glasses.png";
import introductionInfo from "../../../data/home-page/introduction.json";
import IntroductionTitleBlock from "./introduction-title-block";

export interface IntroductionTitle {
  title: string;
  imageWidth?:number;
  rowReverse:boolean;
  imageUrl: string;
}

const Introduction = () => {
  const { introductionTitleArray, subTitle, buttonText } =
    introductionInfo.introductionData;

  return (
    <section className={`container ${styles.introductionSection}`}>
      <div className={styles.introduction}>
        <div className={styles.introductionTitle}>
          {introductionTitleArray.map(
            (introductionItem: IntroductionTitle, index: number) => (
              <IntroductionTitleBlock
                key={`introduction-block-${index}`}
                {...introductionItem}
              ></IntroductionTitleBlock>
            )
          )}
        </div>
        <div className={styles.introductionSubTitle}>
          <span>{subTitle}</span>
        </div>
        <button className={styles.orderNow}>{buttonText}</button>
      </div>
      <Image
        className={styles.intoductionImage}
        src={IntoductionImage}
        alt="intoduction-image"
      ></Image>
    </section>
  );
};

export default Introduction;
