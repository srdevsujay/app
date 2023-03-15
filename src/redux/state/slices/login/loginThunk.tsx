import { AppThunk } from "../../../store";
import { setUser, starLoading } from "./authSlice";
import { loginHandle } from "../../../../pages/Dashboard/services/pnlApi";

export const hadleLogin = (date: any): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading());
    try {
      console.log("datedate", date);
      const resultAction = await loginHandle(date);
      console.log("resultActionStatus", resultAction);
      if (resultAction.status === 200) {
        dispatch(
          setUser({
            token: resultAction.data.token,
            user: resultAction.data.user,
          } as any)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
};
