import { RegisterUser } from "../../../models";
import { clientAxios } from "../../../services";

export const registerUserService = async (data: RegisterUser) => {
  return clientAxios.post("/user", data);
};
