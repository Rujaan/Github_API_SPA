import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: "light",
  },
  reducers: {
    setThemeLight: (state) => {
      state.theme = "light";
    },
    setThemeDark: (state) => {
      state.theme = "dark";
    },
  },
});

export const { setThemeLight, setThemeDark } = themeSlice.actions;

export default themeSlice.reducer;
