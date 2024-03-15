import { DataTrack } from "@/app/api/trackAPI";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TrackListType = {
  tracks: DataTrack[],
  isShuffled: boolean,
  shuffledTracks: DataTrack[],
  currentTrack: null | DataTrack,
  isPlaying: boolean,
}

type SetCurrentTrack = {
  currentTrack: DataTrack;
  tracks: DataTrack[],
}

const initialState: TrackListType = {
  tracks: [],
  isShuffled: false,
  shuffledTracks: [],
  currentTrack: null,
  isPlaying: true,
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setTracks: (state, action: PayloadAction<DataTrack[]>) => {
      state.tracks = action.payload; // полезная нагрузка
    },
    toggleShuffled: (state) => {
      state.isShuffled = !state.isShuffled;
    },
    setCurrentTrack: (state, action: PayloadAction<SetCurrentTrack>) => {
      state.currentTrack = action.payload.currentTrack;
      state.tracks = action.payload.tracks;
      state.shuffledTracks = [...action.payload.tracks].sort(
        () => 0.5 - Math.random(),
      )
    },
    nextTrack: (state) => {
      const currentTracks = state.isShuffled ? state.shuffledTracks : state.tracks;
      const currentTrackIndex = currentTracks.findIndex((item) => item.id === state.currentTrack?.id);
      const newTrack = currentTracks[currentTrackIndex + 1];
      if (!newTrack) {
        state.currentTrack = state.tracks[0]
      } else {
        state.currentTrack = newTrack;
      }
    },
    toggleIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    }
  },
});

export const { setTracks, toggleShuffled, setCurrentTrack, nextTrack, toggleIsPlaying } = playlistSlice.actions;
export const PlaylistReducer = playlistSlice.reducer;