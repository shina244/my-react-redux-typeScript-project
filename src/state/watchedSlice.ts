import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

export interface WatchedMovie {
  Poster: string;
  Runtime: string;
  imdbID: string;
  Title: string;
  imdbRating: string;
}
interface Watched {
  watched: WatchedMovie[];
  selectedID: boolean;
}
const initialState: Watched = {
  watched: [],
  selectedID: false,
};

const watchedSlice = createSlice({
  name: "watched",
  initialState,
  reducers: {
    onAddWatched: (state, action) => {
      const isAlreadyExists = state.watched.find(
        (item) => item.imdbID === action.payload.imdbID,
      );

      if (!isAlreadyExists) {
        state.watched.push(action.payload);
        state.selectedID = false;
      } else {
        state.watched = [...state.watched];
      }
      console.log(current(state.watched));
    },
    onFilter: (state, action) => {
      const filtered = state.watched.filter(
        (item) => item.imdbID !== action.payload,
      );
      state.watched = filtered;
    },
    onSelectMovie: (state) => {
      state.selectedID = true;
    },
    onCloseMovie: (state) => {
      state.selectedID = false;
    },
  },
});

export default watchedSlice.reducer;
export const { onAddWatched, onFilter, onSelectMovie, onCloseMovie } =
  watchedSlice.actions;
