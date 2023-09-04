import React from "react";
import styles from "./product-menu-block.module.scss";

interface OurProductMenuProps {
  chooseProduct: React.Dispatch<React.SetStateAction<number>>;
  index: number;
  activeMenu: boolean;
  productName: string;
}

const OurProductMenuBlock = ({
  chooseProduct,
  activeMenu,
  index,
  productName,
}: OurProductMenuProps) => {
  return (
    <div
      onClick={() => chooseProduct(index)}
      className={`${styles.optionBlock} ${
        activeMenu ? styles.activeOptionBlock : ""
      }`}
    >
      {productName}
    </div>
  );
};

export default OurProductMenuBlock;
