import React from "react";
import styles from "./films.module.scss";
import filmsInfo from "../../../data/home-page/films.json";
import BigFilmImage from "./films-image/big-image";
import SmallFilmImage from "./films-image/small-image";

export const IMAGE_HREF = "/assets/home/films/";

export interface ImageFilmProps {
  imageUrl: string;
  filmName: string;
}

const Films = () => {
  const { filmsData } = filmsInfo;
  const biggestImage = 2;

  return (
    <section className={`container ${styles.filmsSection}`}>
      <div className={styles.films}>
        {filmsData.map((filmInfo, index: number) => (
          <>
            {biggestImage === index ? (
              <BigFilmImage
                key={`film-image${index}`}
                {...filmInfo}
              ></BigFilmImage>
            ) : (
              <SmallFilmImage
                key={`film-image${index}`}
                {...filmInfo}
              ></SmallFilmImage>
            )}
          </>
        ))}
      </div>
    </section>
  );
};

export default Films;
