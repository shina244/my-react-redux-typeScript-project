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

// Subscribe to store changes and persist login state to localStorage
store.subscribe(() => {
  const state = store.getState();
  try {
    localStorage.setItem("loginState", JSON.stringify(state.login));
  } catch (error) {
    console.error("Failed to save login state to localStorage:", error);
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
