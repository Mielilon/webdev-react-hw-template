import classNames from 'classnames'
import styles from './Bar.module.css'
export default function Bar() {
  return (

    <div className={styles.bar__content}>
      <div className={styles.barPlayerProgress} />
      <div className={styles.barPlayerBlock}>
        <div className={styles.bar__player}>
          <div className={styles.player__controls}>
            <div className={styles.playerBtnPrev}>
              <svg className={styles.playerBtnPrevSvg}>
                <use xlinkHref="img/icon/sprite.svg#icon-prev" />
              </svg>
            </div>
            <div className={classNames(styles.playerBtnPlay, styles._btn)}>
              <svg className={styles.playerBtnPlaySvg}>
                <use xlinkHref="img/icon/sprite.svg#icon-play" />
              </svg>
            </div>
            <div className={styles.playerBtnNext}>
              <svg className={styles.playerBtnNextSvg}>
                <use xlinkHref="img/icon/sprite.svg#icon-next" />
              </svg>
            </div>
            <div className={classNames(styles.playerBtnRepeat,styles._btnIcon)}>
              <svg className={styles.playerBtnRepeatSvg}>
                <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
              </svg>
            </div>
            <div className={classNames(styles.playerBtnShuffle,styles._btnIcon)}>
              <svg className={styles.playerBtnShuffleSvg}>
                <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
              </svg>
            </div>
          </div>
          <div className={styles.playerTrackPlay}>
            <div className={styles.trackPlayContain}>
              <div className={styles.trackPlayImage}>
                <svg className={styles.trackPlaySvg}>
                  <use xlinkHref="img/icon/sprite.svg#icon-note" />
                </svg>
              </div>
              <div className={styles.trackPlayAuthor}>
                <a className={styles.trackPlayAuthorLink} href="http://">
                  Ты та...
                </a>
              </div>
              <div className={styles.trackPlayAlbum}>
                <a className={styles.trackPlayAlbumLink} href="http://">
                  Баста
                </a>
              </div>
            </div>
            <div className={styles.trackPlayLikeDis}>
              <div className={classNames(styles.trackPlayLike,styles._btnIcon)}>
                <svg className={styles.trackPlayLikeSvg}>
                  <use xlinkHref="img/icon/sprite.svg#icon-like" />
                </svg>
              </div>
              <div className={classNames(styles.trackPlayDislike,styles._btnIcon)}>
                <svg className={styles.trackPlayDislikeSvg}>
                  <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.barVolumeBlock}>
          <div className={styles.volumeContent}>
            <div className={styles.volumeImage}>
              <svg className={styles.volumeSvg}>
                <use xlinkHref="img/icon/sprite.svg#icon-volume" />
              </svg>
            </div>
            <div className={styles.volumeProgress}>
              <input
                className={styles.volumeProgressLine}
                type="range"
                name="range"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}