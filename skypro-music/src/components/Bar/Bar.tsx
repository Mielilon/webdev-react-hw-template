import PlayerControls from "../PlayerControls/PlayerControls";
import PlayerTrack from "../PlayerTrack/PlayerTrack";
import Volume from "../Volume/Volume";
import styles from "../Bar/Bar.module.css"
import { DataTrack } from "@/app/api/trackAPI";
import { useRef, useState } from "react";

type BarProps = {
  currentTrack: DataTrack,
}

export default function Bar({ currentTrack }: BarProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleStart = () => {
    if (!audioRef.current) {
      return
    }
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handleStop = () => {
    if (!audioRef.current) {
      return
    }
    audioRef?.current.pause();
    setIsPlaying(false);
  };

  const togglePlay = isPlaying ? handleStop : handleStart;

  return (
    <div className={styles.bar}>
      <audio autoPlay controls src={currentTrack.track_file} ref={audioRef} />
      <div className={styles.barContent}>
        <div className={styles.barPlayerProgress} />
        <div className={styles.barPlayerBlock}>
          <div className={styles.barPlayer}>
            <PlayerControls />
            <PlayerTrack currentTrack={currentTrack} />
          </div>
          <Volume />
        </div>
      </div>
    </div>
  )
}