import classNames from "classnames"
import styles from "../PlayerTrack/PlayerTrack.module.css"
import Link from "next/link"

export default function PlayerTrack() {
  return (
    <div className={styles.playerTrackPlay}>
      <div className={styles.trackPlayContain}>
        <div className={styles.trackPlayImage}>
          <svg className={styles.trackPlaySvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-note" />
          </svg>
        </div>
        <div className={styles.trackPlayAuthor}>
          <Link className={styles.trackPlayAuthorLink} href="http://">
          Ты та...
        </Link>
      </div>
      <div className={styles.trackPlayAlbum}>
        <Link className={styles.trackPlayAlbumLink} href="http://">
        Баста
      </Link>
    </div>
      </div >
    <div className={styles.trackPlayLikeDis}>
      <div className={classNames(styles.trackPlayLike, styles.btnIcon)}>
        <svg className={styles.trackPlayLikeSvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-like" />
        </svg>
      </div>
      <div className={classNames(styles.trackPlayDislike, styles.btnIcon)}>
        <svg className={styles.trackPlayDislikeSvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
        </svg>
      </div>
    </div>
    </div >
  )
}