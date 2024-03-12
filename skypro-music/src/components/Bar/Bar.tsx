import PlayerControls from "../PlayerControls/PlayerControls";
import PlayerTrack from "../PlayerTrack/PlayerTrack";
import Volume from "../Volume/Volume";
import styles from "../Bar/Bar.module.css"
import { DataTrack } from "@/app/api/trackAPI";
import { useEffect, useRef, useState } from "react";
import { ProgressBar } from "../ProgressBar";

type BarProps = {
  currentTrack: DataTrack,
}

export default function Bar({ currentTrack }: BarProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  function handleVolume(e: React.ChangeEvent<HTMLInputElement>): void {
    const { value } = e.target;
    const volume = Number(value) / 10;
    audioRef.current!.volume = volume;
  }

  const handleProgress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCurrentProgress(Number(value));
    if (audioRef.current) {
      audioRef.current.currentTime = Number(value);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    const result = String(mins).padStart(2, "0") + ":" + String(secs).padStart(2, "0");
    return result;
  };

  const handleDuration = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const duration = Number(value) / 10;
    audioRef.current!.duration = duration;
    setDuration(duration);
  };

  const durationDisplay = audioRef.current
    ? formatTime(Math.floor(audioRef.current.duration))
    : null;
  const elapsedDisplay = audioRef.current
    ? formatTime(Math.floor(currentProgress))
    : null;

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

  const handleLoop = () => {
    setIsLooping((prev) => !prev)
  }

  const togglePlay = isPlaying ? handleStop : handleStart;

  return (
    <div className={styles.bar}>
      <audio autoPlay controls src={currentTrack.track_file} ref={audioRef} loop={isLooping} onTimeUpdate={(e) => {
        setCurrentProgress(e.currentTarget.currentTime)
      }} />
      <div className={styles.barContent}>
        <ProgressBar
          currentTime={currentProgress}
          duration={duration}
          handleProgress={handleProgress}
        />
        <div className={styles.barPlayerBlock}>
          <div className={styles.barPlayer}>
            <PlayerControls isLooping={isLooping} handleLoop={handleLoop} />
            <PlayerTrack currentTrack={currentTrack} />
          </div>
         <div className={styles.wrapBar}>
         <Volume handleVolume={handleVolume} />
          <div className={styles.barPlayerTime}>
            {elapsedDisplay} / {durationDisplay}
          </div>
        </div>
         </div>
      </div>
    </div>
  )
}