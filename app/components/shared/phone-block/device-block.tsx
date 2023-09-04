import styles from "./device-block.module.scss";
import Image from "next/image";

interface DeviceBlockProps {
  deviceName: string;
  price: string;
  imageUrl: string;
  imagesFileLocation: string;
}

const DeviceBlock = ({
  deviceName,
  price,
  imageUrl,
  imagesFileLocation,
}: DeviceBlockProps) => {
  return (
    <div className={styles.deviceBlock}>
      <div className={styles.titleBlock}>
        <h1 className={styles.title}>{deviceName}</h1>
        <p>From &#36;{price}</p>
      </div>
      <Image
        width={264}
        height={344}
        alt="iphone"
        src={`${imagesFileLocation}${imageUrl}`}
      ></Image>
      <button className={styles.details}>Details</button>
    </div>
  );
};
export default DeviceBlock;
