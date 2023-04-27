import { createSlice } from '@reduxjs/toolkit';
import { UserInfo } from '../../../../models';

// Define the initial state using that type
export const EmptyUserState = {
  token: "",
  user: {
    email: "",
    id: 0,
    last_name: "",
    name: "",
    password: "",
    public_id: "",
    status: 0,
    tokens: [],
    user_type: 0,
  },
  dataRegister: {},
  isLoading: false,
  userEdit: [],
  profilePicture: "",
  pictureTime: Date.now(),
  deleteProfilePicture: "",
};


export const userSlice = createSlice({
  name: "user",
  initialState: EmptyUserState,
  reducers: {
    createUser: (state, action) => action.payload,
    updateUser: (state, action) => ({ ...state, ...action.payload }),
    resetUser: () => EmptyUserState
  }
})

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;