import classNames from "classnames"
import styles from "../PlayerControls/PlayerControls.module.css"
import SVG from "../SVG/SVG"
import { useAppDispatch, useAppSelector } from "@/app/hooks/hooks"
import { toggleShuffled } from "@/app/store/features/PlaylistSlice"

type PlayerControlsType = {
  handleLoop: () => void,
  isLooping: boolean,
  togglePlay: () => void,
  isPlaying: boolean,
}

export default function PlayerControls({ handleLoop, isLooping, togglePlay, isPlaying }: PlayerControlsType) {

  const dispatch = useAppDispatch();
  const isShuffled = useAppSelector((store) => store.playlist.isShuffled)
  return (
    <div className={styles.playerControls}>
      <div className={classNames(styles.playerBtnPrev, styles.btnIcon)}>
        <SVG className={styles.playerBtnPrevSvg} icon="icon-prev" />
      </div>
      <div onClick={togglePlay} className={classNames(styles.playerBtnPlay, styles.btnIcon)}>
        <SVG className={styles.playerBtnPlaySvg} icon={isPlaying ? "icon-pause" : "icon-play"} />
      </div>
      <div className={classNames(styles.playerBtnNext, styles.btnIcon)}>
        <SVG className={styles.playerBtnNextSvg} icon="icon-next" />
      </div>
      <div onClick={handleLoop} className={isLooping ? (classNames(styles.playerBtnRepeat, styles.btnIcon)) : (classNames(styles.playerBtnRepeat, styles.btnIconActive))}>
        <SVG className={styles.playerBtnRepeatSvg} icon="icon-repeat" />
      </div>
      <div
        onClick={() => dispatch(toggleShuffled())}
        className={isShuffled ? (classNames(styles.playerBtnShuffle, styles.btnIcon)) : (classNames(styles.playerBtnShuffle, styles.btnIconActive))}>
        <SVG className={styles.playerBtnShuffleSvg} icon="icon-shuffle" />
      </div>
    </div>
  )
}