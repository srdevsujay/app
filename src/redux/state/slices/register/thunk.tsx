import { RegisterUser } from "../../../../models";
import { registerUserService } from "../../../../pages/Register/services/registerUserService";
import { stateUser } from "../../../../utilities";
import { registerUser, starLoading } from "../login/authSlice";

export const registerUserThunk = (dataUser: RegisterUser) => {
  return async (dispatch: any) => {
    dispatch(starLoading());
    try {
      const resultAction = await registerUserService(dataUser);
      const { data } = resultAction.data;
      dispatch(
        registerUser({
          user: stateUser,
          token: "",
          dataRegister: data,
          isLoading: false,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};
