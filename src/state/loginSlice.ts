import { createSlice } from "@reduxjs/toolkit";

interface loginDetails {
  password: string;
  email: string;
  isLoggedIn: boolean;
}

// Load login state from localStorage
const getInitialState = (): loginDetails => {
  try {
    const savedState = localStorage.getItem("loginState");
    if (savedState) {
      return JSON.parse(savedState);
    }
  } catch (error) {
    console.error("Failed to load login state from localStorage:", error);
  }
  return {
    password: "",
    email: "",
    isLoggedIn: false,
  };
};

const initialState: loginDetails = getInitialState();

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    updatePassword: (state, action) => {
      state.password = action.payload;
    },
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    onButtonClick: (state) => {
      if (state.email !== "" && state.password !== "") {
        state.isLoggedIn = true;
      } else {
        state.isLoggedIn = false;
      }
    },
    onLogOut: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { updateEmail, updatePassword, onButtonClick, onLogOut } =
  loginSlice.actions;
export default loginSlice.reducer;
