"use client";
import React, { useState } from "react";
import styles from "./our-products.module.scss";
import productsData from "../../../data/home-page/our-products.json";
import DeviceBlock from "../../shared/phone-block";
import OurProductMenuBlock from "./our-product-menu";

const IMAGE_HREF = "/assets/home/our-products/";

interface ProductObjectData {
  deviceName: string;
  price: string;
  imageUrl: string;
}

interface OurProductsData {
  title: string;
  productsMenu: Array<string>;
  products: Array<Array<ProductObjectData>>;
}

const OurProducts = () => {
  const [activeProducts, setActieProducts] = useState<number>(0);

  const {
    title,
    productsMenu,
    products: productsArray,
  }: OurProductsData = productsData["our-products"];

  return (
    <section className={styles.productsSection}>
      <div className={`container ${styles.ourProducts}`}>
        <h1
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: title }}
        ></h1>
        <div className={styles.productsOptions}>
          {productsMenu.map((productName:string, index: number) => (
            <OurProductMenuBlock
              key={`our-product-${index}`}
              productName={productName}
              activeMenu={index === activeProducts}
              index={index}
              chooseProduct={setActieProducts}
            ></OurProductMenuBlock>
          ))}
        </div>
        <div className={styles.devices}>
          {productsArray.map(
            (productArray: Array<ProductObjectData>, index) => (
              <>
                {index === activeProducts &&
                  productArray.map(
                    (device: ProductObjectData, index: number) => (
                      <DeviceBlock
                        key={`product-info-${index}`}
                        imagesFileLocation={IMAGE_HREF}
                        {...device}
                      ></DeviceBlock>
                    )
                  )}
              </>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
