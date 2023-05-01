import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  DashboardInfo,
  CampaignData,
} from "../../../../pages/Dashboard/models/dashboard.model";

export const dashboardState: DashboardInfo = {
  isLoading: false,
  dataPNL: [],
  dataTracking: [],
  dataFunnel: [],
  tokenfacebook: false,
  tokengoogle: false,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: dashboardState,
  reducers: {
    starLoading: (state) => {
      state.isLoading = true;
    },
    setPNL: (state, action: PayloadAction<[]>) => {
      state.isLoading = false;
      state.dataPNL = action.payload;
    },
    setDataTracking: (state, action: PayloadAction<[]>) => {
      state.isLoading = false;
      state.dataTracking = action.payload;
    },
    setDataFunnel: (state, action: PayloadAction<[]>) => {
      state.isLoading = false;
      state.dataFunnel = action.payload;
    },
    setTokenFacebook: (state, action: PayloadAction<boolean>) => {
      state.tokenfacebook = action.payload;
    },
    setTokenGoogle: (state, action: PayloadAction<boolean>) => {
      state.tokengoogle = action.payload;
    },
  },
});

export const {
  starLoading,
  setPNL,
  setDataTracking,
  setDataFunnel,
  setTokenFacebook,
  setTokenGoogle,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
