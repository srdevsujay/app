import Swal from "sweetalert2";
import { RegisterUser } from "../../../../models";
import { registerUserService } from "../../../../pages/Register/services/registerUserService";
import { stateUser } from "../../../../utilities";
import { registerUser, setEmailProfile, starLoading } from "../login/authSlice";

export const registerUserThunk = (dataUser: RegisterUser) => {
  return async (dispatch: any) => {
    dispatch(starLoading());
    try {
      const resultAction = await registerUserService(dataUser);
      const { data } = resultAction.data;
      console.log("dataRegister", resultAction.data.message);
      if (resultAction.data.message === "Email already exists") {
        Swal.fire("", "El correo ya existe, por favor ingresa otro.", "info");
      }
      if (resultAction.data.message === "Create user successfully!") {
        // Alerta
        Swal.fire("Correcto", "Usuario creado correctamente!!", "success");
        localStorage.setItem("accountSuccess", resultAction.data.data.email);
        dispatch(setEmailProfile(resultAction.data.data.email));
        // dispatch(obtainApiUser());
        // dispatch(handleValidateEmail(1));
      }
      dispatch(
        registerUser({
          user: stateUser,
          token: "",
          dataRegister: data,
          isLoading: false,
          userEdit: [],
          profilePicture: "",
          pictureTime: Date.now(),
          deleteProfilePicture: "",
          email: "",
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};
