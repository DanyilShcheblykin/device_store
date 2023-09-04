import React from "react";
import styles from "./phones-options.module.scss";
import Link from "next/link";
import Image from "next/image";
import Arrow from "../../../../public/assets/home/phones-options/arrow-right.svg";
import phoneData from "../../../data/home-page/phones-options.json";
import PhoneBlock from "../../shared/phone-block";

export interface PhoneBlockModel {
  phoneName: string;
  price: string;
  imageUrl: string;
}

interface PhonesOptionsData {
  title: string;
  allProducts: string;
  phonesInfo: Array<PhoneBlockModel>;
}

const PhonesOptions = () => {
  const { title, allProducts, phonesInfo }: PhonesOptionsData =
    phoneData["phones-options-data"];

  return (
    <section className={styles.phonesSection}>
      <div className={`container ${styles.phonesOptions}`}>
        <div className={styles.allPhones}>
          <h1
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: title }}
          ></h1>
          <Link href="/">
            <div className={styles.checkAllPhones}>
              <span className={styles.link}>{allProducts}</span>
              <Image src={Arrow} alt="arrrow"></Image>
            </div>
          </Link>
        </div>
        <div className={styles.phones}>
          {phonesInfo.map((phoneInfo: PhoneBlockModel, index: number) => (
            <PhoneBlock key={`phone-info-${index}`} {...phoneInfo}></PhoneBlock>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhonesOptions;
