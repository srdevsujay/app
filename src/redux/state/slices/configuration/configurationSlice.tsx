import { createSlice } from "@reduxjs/toolkit";

export const configurationState: any = {
  isLoading: false,
  dataTokenGoogle: [],
};

export const configurationSlice = createSlice({
  name: "configuration",
  initialState: configurationState,
  reducers: {
    starLoading: (state) => {
      state.isLoading = true;
    },
    setTokenGoogle: (state, action) => {
      state.isLoading = false;
      state.dataTokenGoogle = action.payload;
    },
  },
});

export const { starLoading, setTokenGoogle } = configurationSlice.actions;
export default configurationSlice.reducer;
