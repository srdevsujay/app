import { createSlice } from "@reduxjs/toolkit";

export const trackingState: any = {
  isLoading: false,
  dataProduct: [],
  dataTag: [],
  dataAttribution: [],
  dataRule: [],
};

export const trackingSlice = createSlice({
  name: "tracking",
  initialState: trackingState,
  reducers: {
    starLoading: (state) => {
      state.isLoading = true;
    },
    setProduct: (state, action) => {
      state.isLoading = false;
      state.dataProduct = action.payload;
    },
    setTag: (state, action) => {
      state.isLoading = false;
      state.dataTag = action.payload;
    },
    setAttribution: (state, action) => {
      state.isLoading = false;
      state.dataAttribution = action.payload;
    },
    setRule: (state, action) => {
      state.isLoading = false;
      state.dataRule = action.payload;
    },
  },
});

export const { starLoading, setProduct, setTag, setAttribution, setRule } =
  trackingSlice.actions;
export default trackingSlice.reducer;
