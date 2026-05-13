import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const KEY = "7ed131c4";
export interface MovieState {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
  Type: string;
}

interface Movie {
  data: MovieState[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: Movie = {
  data: [],
  isLoading: false,
  isError: false,
};
const omdbSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(apiAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(apiAsync.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(apiAsync.rejected, (state) => {
      state.isError = true;
    });
  },
});

export const apiAsync = createAsyncThunk(
  "movies/apiAsync",
  async (movieName: string) => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${KEY}&s=${movieName}`,
    );
    const data = await response.json();
    console.log(data);
    return data.Search || [];
  },
);

export default omdbSlice.reducer;
