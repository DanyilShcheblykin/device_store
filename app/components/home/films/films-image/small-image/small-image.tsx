import Image from "next/image";
import styles from './small-image.module.scss'
import { IMAGE_HREF, ImageFilmProps } from "../../films";

const SmallFilmImage = ({ imageUrl, filmName }: ImageFilmProps) => {
    return (
      <div className={styles.filmsBlock}>
        <Image
          width={88}
          height={480}
          alt="film"
          src={`${IMAGE_HREF}${imageUrl}`}
        ></Image>
        <span className={styles.filmName}>{filmName}</span>
      </div>
    );
  };
  export default SmallFilmImage