import Image from "next/image";
import { IMAGE_HREF, ImageFilmProps } from "../../films";
import styles from './big-image.module.scss'

const BigFilmImage = ({ imageUrl, filmName }: ImageFilmProps) => {
    return (
      <div className={styles.filmsBlock}>
        <Image
          width={872}
          height={480}
          alt="film"
          src={`${IMAGE_HREF}${imageUrl}`}
        ></Image>
        <div className={styles.titleBlock}>
          <h1 className={styles.title}>{filmName}</h1>
          <p className={styles.subTitle}>Thriller</p>
        </div>
        <div className={styles.streamButtonBlock}>
          <button className={styles.streamButton}>
            <span>Stream Now</span>
            <div className={styles.circle}>
              <div className={styles.arrow}></div>
            </div>
          </button>
        </div>
      </div>
    );
  };
  export default BigFilmImage