import { createSlice } from "@reduxjs/toolkit";

export const configurationState: any = {
  isLoading: false,
  dataTokenGoogle: [],
  customerId: "",
  subscriptionsPlans: {},
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
    setCustomerId: (state, action) => {
      state.isLoading = false;
      state.customerId = action.payload;
    },
    setSubscriptionsPlans: (state, action) => {
      state.isLoading = false;
      state.subscriptionsPlans = action.payload;
    },
  },
});

export const {
  starLoading,
  setTokenGoogle,
  setCustomerId,
  setSubscriptionsPlans,
} = configurationSlice.actions;
export default configurationSlice.reducer;
