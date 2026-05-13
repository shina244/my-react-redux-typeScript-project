import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface SelectedMovie {
  Poster: string;
  Actors: string;
  Director: string;
  Title: string;
  Plot: string;
  Genre: string;
  Writer: string;
  Year: string;
  Released: string;
  Runtime: string;
  imdbID: string;
  imdbRating: string;
  isLoading: boolean;
}

const KEY = "7ed131c4";

const initialState: SelectedMovie = {
  Poster: "",
  Actors: "",
  Director: "",
  Title: "",
  Genre: "",
  Released: "",
  Runtime: "",
  Writer: "",
  Year: "",
  Plot: "",
  imdbID: "",
  imdbRating: "",
  isLoading: false,
};

const selectedSlice = createSlice({
  name: "selected",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(selectedApiAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(selectedApiAsync.fulfilled, (state, action) => {
      state.Actors = action.payload.Actors;
      state.Poster = action.payload.Poster;
      state.Title = action.payload.Title;
      state.Genre = action.payload.Genre;
      state.Runtime = action.payload.Runtime;
      state.Plot = action.payload.Plot;
      state.Writer = action.payload.Writer;
      state.Year = action.payload.Year;
      state.Released = action.payload.Released;
      state.imdbID = action.payload.imdbID;
      state.imdbRating = action.payload.imdbRating;
      state.Director = action.payload.Director;
      state.isLoading = false;
    });
  },
});

export const selectedApiAsync = createAsyncThunk(
  "selected/selectedApiAsync",
  async (id: string) => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${KEY}&i=${id}`,
    );

    const data = await response.json();
    console.log(data);
    return data;
  },
);

export default selectedSlice.reducer;
