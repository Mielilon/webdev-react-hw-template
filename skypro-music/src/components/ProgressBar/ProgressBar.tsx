import { useEffect, useRef, useState } from "react";
import styles from "./ProgressBar.module.css"


type ProgressBarType = {
  currentTime: number, 
  duration: number, 
  handleProgress: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export default function ProgressBar({ currentTime, duration, handleProgress }: ProgressBarType) {

  return (
    <input
      className={styles.styledProgressInput}
      type="range"
      min={0}
      max={duration}
      value={currentTime}
      step={0.01}
      onChange={handleProgress}
    />
  );
}