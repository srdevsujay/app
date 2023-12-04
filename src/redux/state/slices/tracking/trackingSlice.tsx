import { createSlice } from "@reduxjs/toolkit";

export const trackingState: any = {
  isLoading: false,
  dataProduct: [],
  dataTag: [],
  dataAttribution: [],
  dataRule: [],
  currentAttribution: [],
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
    setCurrentAttribution: (state, action) => {
      state.currentAttribution = action.payload;
    },
  },
});

export const {
  starLoading,
  setProduct,
  setTag,
  setAttribution,
  setRule,
  setCurrentAttribution,
} = trackingSlice.actions;
export default trackingSlice.reducer;
