import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
  ThunkAction,
  AnyAction,
} from "@reduxjs/toolkit";
// import { TypedUseSelectorHook, useSelector, AppDispatch } from "react-redux";
import { authApi } from "../pages/Login/services/userService";
// import authReducer from "../pages/Login/store/slices/authSlice";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { UserInfo } from "../models";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import userSlice from "./state/slices/login/user";
import { authSlice } from "./state/slices/login";
import { DashboardInfo } from "../pages/Dashboard/models/dashboard.model";
import dashboardSlice from "./state/slices/dashboard/dashboardSlice";
import logger from "redux-logger";

export interface AppStore {
  authApi: any;
  user: UserInfo;
  dashboard: DashboardInfo;
}

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers<AppStore>({
  [authApi.reducerPath]: authApi.reducer,
  user: authSlice,
  dashboard: dashboardSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === "development",
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  // devTools: process.env.NODE_ENV === "development",
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
setupListeners(store.dispatch);
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;
