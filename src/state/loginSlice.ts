import { createSlice } from "@reduxjs/toolkit";

interface loginDetails {
  password: string;
  email: string;
  isLoggedIn: boolean;
}

const initialState: loginDetails = {
  password: "",
  email: "",
  isLoggedIn: false,
};

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
