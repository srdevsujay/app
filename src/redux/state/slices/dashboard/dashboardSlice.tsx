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
  dataFilter: "",
  tokenfacebook: false,
  tokengoogle: false,
  toggleSlider: false,
  permissionFacebook: false,
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
    setDataFilter: (state, action: PayloadAction<"">) => {
      state.isLoading = false;
      state.dataFilter = action.payload;
    },
    setTokenFacebook: (state, action: PayloadAction<boolean>) => {
      state.tokenfacebook = action.payload;
    },
    setTokenGoogle: (state, action: PayloadAction<boolean>) => {
      state.tokengoogle = action.payload;
    },
    setToggleSlider: (state, action: PayloadAction<boolean>) => {
      state.toggleSlider = action.payload;
    },
    setPermissionFacebook: (state, action: PayloadAction<boolean>) => {
      state.permissionFacebook = action.payload;
    },
  },
});

export const {
  starLoading,
  setPNL,
  setDataTracking,
  setDataFunnel,
  setDataFilter,
  setTokenFacebook,
  setTokenGoogle,
  setToggleSlider,
  setPermissionFacebook,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
