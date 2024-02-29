import Link from "next/link";
import styles from "./Track.module.css";

type Track = {
  title: string;
  author: string;
  album: string;
  time: string;
};

export default function Track({ title, author, album, time }: Track) {
  return (
    <>
      <div className={styles.playlistItem}>
        <div className={styles.playlistTrack}>
          <div className={styles.trackTitle}>
            <div className={styles.trackTitleImage}>
              <svg className={styles.trackTitleSvg}>
                <use xlinkHref="img/icon/sprite.svg#icon-note" />
              </svg>
            </div>
            <div>
              <Link className={styles.trackTitleLink} href="http://">
              {title} <span className={styles.trackTitleSpan} />
            </Link>
          </div>
        </div>
        <div className={styles.trackAuthor}>
          <Link className={styles.trackAuthorLink} href="http://">
          {author}
        </Link>
      </div>
      <div className={styles.trackAlbum}>
        <Link className={styles.trackAlbumLink} href="http://">
        {album}
      </Link>
    </div >
      <div>
        <svg className={styles.trackTimeSvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-like" />
        </svg>
        <span className={styles.trackTimeText}>{time}</span>
      </div>
        </div >
      </div >
    </>
  )
}