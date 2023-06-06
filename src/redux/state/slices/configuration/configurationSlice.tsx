import { createSlice } from "@reduxjs/toolkit";

export const configurationState: any = {
  isLoading: false,
  dataTokenGoogle: [],
  customerId: "",
  subscriptionUser: {},
  subscriptionsPlans: {},
  amount: {},
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
    setSubscriptionUser: (state, action) => {
      state.isLoading = false;
      state.subscriptionUser = action.payload;
    },
    setSubscriptionsPlans: (state, action) => {
      state.isLoading = false;
      state.subscriptionsPlans = action.payload;
    },
    setAmount: (state, action) => {
      state.isLoading = false;
      state.amount = action.payload;
    },
  },
});

export const {
  starLoading,
  setTokenGoogle,
  setCustomerId,
  setSubscriptionUser,
  setSubscriptionsPlans,
  setAmount,
} = configurationSlice.actions;
export default configurationSlice.reducer;
