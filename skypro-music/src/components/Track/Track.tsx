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
              <a className={styles.trackTitleLink} href="http://">
                {title} <span className={styles.trackTitleSpan} />
              </a>
            </div>
          </div>
          <div className={styles.trackAuthor}>
            <a className={styles.trackAuthorLink} href="http://">
              {author}
            </a>
          </div>
          <div className={styles.trackAlbum}>
            <a className={styles.trackAlbumLink} href="http://">
              {album}
            </a>
          </div>
          <div>
            <svg className={styles.trackTimeSvg}>
              <use xlinkHref="img/icon/sprite.svg#icon-like" />
            </svg>
            <span className={styles.trackTimeText}>{time}</span>
          </div>
        </div>
      </div>
    </>
  )
}