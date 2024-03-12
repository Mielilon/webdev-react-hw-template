import classNames from "classnames"
import styles from "../PlayerControls/PlayerControls.module.css"
import SVG from "../SVG/SVG"
import { useState } from "react";
import { usePlayer } from "@/app/contexts/PlayerContext";

type PlayerControlsType = {
  handleLoop: () => void,
  isLooping: boolean,
}

export default function PlayerControls({handleLoop, isLooping}: PlayerControlsType) {
  const { isPlaying, togglePlay } = usePlayer();

  return (
    <div className={styles.playerControls}>
      <div className={styles.playerBtnPrev}>
        <SVG className={styles.playerBtnPrevSvg} icon="icon-prev" />
      </div>
      <div onClick={togglePlay} className={classNames(styles.playerBtnPlay, styles.btn)}>
        <SVG className={styles.playerBtnPlaySvg} icon={isPlaying ? "icon-pause" : "icon-play"} />
      </div>
      <div className={styles.playerBtnNext}>
        <SVG className={styles.playerBtnNextSvg} icon="icon-next" />
      </div>
      <div onClick={handleLoop} className={classNames(styles.playerBtnRepeat, styles.btnIcon)}>
        <SVG className={styles.playerBtnRepeatSvg} icon="icon-repeat" />
      </div>
      <div className={classNames(styles.playerBtnShuffle, styles.btnIcon)}>
        <SVG className={styles.playerBtnShuffleSvg} icon="icon-shuffle" />
      </div>
    </div>
  )
}