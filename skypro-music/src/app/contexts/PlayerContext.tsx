import { createContext, useContext, useState } from "react";

type PlayerContextType = {
  isPlaying: boolean;
  togglePlay: () => void;
};

const PlayerContext = createContext<PlayerContextType | null>(null);

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error("usePlayer must be used within a PlayerProvider");
  }
  return context;
};

export const PlayerProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <PlayerContext.Provider value={{ isPlaying, togglePlay }}>
      {children}
    </PlayerContext.Provider>
  );
};