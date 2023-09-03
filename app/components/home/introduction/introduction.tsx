import React from "react";
import styles from "./introduction.module.scss";
import Image from "next/image";
import FirstOject from "../../../../public/assets/home/intoduction/object-1.png";
import SecondOject from "../../../../public/assets/home/intoduction/object-2.png";
import IntoductionImage from "../../../../public/assets/home/intoduction/virtual-glasses.png";

const Introduction = () => {
  return (
    <section className={styles.introductionSection}>
      <div className={styles.introduction}>
        <div className={styles.introductionTitle}>
          <div className={styles.titleBlock}>
            <h1> Elevating Life</h1>
            <Image
              className={styles.titleFirstImage}
              alt="text-image"
              src={FirstOject}
            ></Image>
          </div>
          <div className={styles.titleBlock}>
            <h1> To Pro-Level Precision</h1>
          </div>
          <div className={styles.titleBlock}>
            <Image
              className={styles.titleSecondImage}
              alt="text-image"
              src={SecondOject}
            ></Image>
            <h1> with Vision Pro</h1>
          </div>
        </div>
        <div className={styles.introductionSubTitle}>
          <span>
            With Vision Pro, you have an infinite canvas that transforms how you
            use the apps you love. Arrange apps anywhere and scale them to the
            perfect size, making the workspace of your dreams a reality — all
            while staying present in the world around you
          </span>
        </div>
        <button className={styles.orderNow}>Pre-Order Now</button>
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
