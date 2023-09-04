import styles from "./phone-block.module.scss";
import Image from "next/image";

const IMAGE_HREF = "/assets/home/phones-options/";

interface PhoneBlockProps {
  phoneName: string;
  price: string;
  imageUrl: string;
}

const PhoneBlock = ({ phoneName, price, imageUrl }: PhoneBlockProps) => {
  return (
    <div className={styles.phonesBlock}>
      <div className={styles.titleBlock}>
        <h1 className={styles.title}>{phoneName}</h1>
        <p>From &#36;{price}</p>
      </div>
      <Image
        width={264}
        height={344}
        alt="iphone"
        src={`${IMAGE_HREF}${imageUrl}`}
      ></Image>
      <button className={styles.details}>Details</button>
    </div>
  );
};
export default PhoneBlock;
