import { useState } from "react";
import styles from "./ProgressBar.module.css"


export default function ProgressBar() {
  const [currentTime, setCurrentTime] = useState(70);
  const duration = 230;

  type ProgressBarType = {

  }

  return (
    <input
    className={styles.styledProgressInput}
      type="range"
      min={0}
      max={duration}
      value={currentTime}
      step={0.01}
      // onChange={(event) => setCurrentTime(event.target.value)}
    />
  );
}