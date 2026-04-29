import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "./omdbSlice";
import SelectedReducer from "./selectedSlice";
import WatchedReducer from "./watchedSlice";
import LoginReducer from "./loginSlice";

export const store = configureStore({
  reducer: {
    movies: MovieReducer,
    selected: SelectedReducer,
    watched: WatchedReducer,
    login: LoginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
