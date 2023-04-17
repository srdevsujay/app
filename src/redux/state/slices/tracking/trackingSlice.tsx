import { createSlice } from "@reduxjs/toolkit";

export const trackingState: any = {
  isLoading: false,
  dataProduct: [],
  dataTag: [],
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
  },
});

export const { starLoading, setProduct, setTag } = trackingSlice.actions;
export default trackingSlice.reducer;
