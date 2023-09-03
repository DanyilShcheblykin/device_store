import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./header-button.module.scss";

interface HeaderButton {
  image: StaticImageData;
  alt:string
}

const HeaderButton = ({ alt, image }: HeaderButton) => {
  return (
    <div className={styles.buttonBlock}>
      <Image
        className={styles.image}
        alt={alt}
        src={image}
      ></Image>
    </div>
  );
};

export default HeaderButton;
