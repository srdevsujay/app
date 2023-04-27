import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LocalStorageTypes, UserInfo } from "../../../../models";
import {
  getLocalStorage,
  setJwt,
  setLocalStorage,
  stateUser,
} from "../../../../utilities";

export const EmptyUserState: UserInfo = {
  token: "",
  user: stateUser,
  dataRegister: {},
  isLoading: false,
  userEdit: [],
  profilePicture: "",
  pictureTime: Date.now(),
  deleteProfilePicture: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: getLocalStorage(LocalStorageTypes.USER)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.USER) as string)
    : EmptyUserState,
  reducers: {
    starLoading: (state) => {
      state.isLoading = true;
    },
    setUser: (state, action: PayloadAction<UserInfo>) => {
      setLocalStorage(LocalStorageTypes.USER, {
        token: action.payload.token,
        user: action.payload.user,
      });
      setJwt(action.payload.token);
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.userEdit = [];
      state.profilePicture = "";
      state.pictureTime = Date.now();
      state.deleteProfilePicture = "";
    },
    registerUser: (state, action: PayloadAction<UserInfo>) => {
      state.isLoading = false;
      state.dataRegister = action.payload.dataRegister;
    },
    logoutUser: (state) => {
      state.isLoading = false;
      state.user = null;
    },
    setUserEdit: (state, action: PayloadAction<UserInfo>) => {
      state.isLoading = false;
      state.userEdit = action.payload.userEdit;
    },
    setProfilePicture: (state, action: PayloadAction<UserInfo>) => {
      state.isLoading = false;
      state.profilePicture = action.payload.profilePicture;
      state.user = action.payload.user;
      state.pictureTime = Date.now();
    },
    setDeleteProfilePicture: (state, action: PayloadAction<UserInfo>) => {
      state.isLoading = false;
      state.deleteProfilePicture = action.payload.deleteProfilePicture;
    },
  },
});

// export const selectAuth = (state: RootState) => state.auth;

export const {
  starLoading,
  setUser,
  registerUser,
  logoutUser,
  setUserEdit,
  setProfilePicture,
  setDeleteProfilePicture,
} = authSlice.actions;

export default authSlice.reducer;
