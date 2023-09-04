import React from "react";
import Image from "next/image";
import styles from "./introduction-title-block.module.scss";
import { IntroductionTitle } from "../introduction";

const IMAGE_HREF = "/assets/home/introduction/";

const IntroductionTitleBlock = ({
  title,
  imageUrl,
  imageWidth,
  rowReverse,
}: IntroductionTitle) => {
  return (
    <div
      style={{ flexDirection: rowReverse ? "row-reverse" : "row" }}
      className={styles.titleBlock}
    >
      <h1>{title}</h1>
      {imageUrl && (
        <Image
          width={imageWidth}
          height={57}
          alt="text-image"
          src={`${IMAGE_HREF}${imageUrl}`}
        ></Image>
      )}
    </div>
  );
};

export default IntroductionTitleBlock;
