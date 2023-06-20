import { AppThunk } from "../../../store";
import {
  setDeleteProfilePicture,
  setProfilePicture,
  setUser,
  setUserEdit,
  starLoading,
} from "./authSlice";
import {
  loginHandle,
  editUserService,
  createDeleteImageProfileService,
  loginGoogle,
} from "../../../../pages/Dashboard/services/pnlApi";
import Swal from "sweetalert2";
import axios from "axios";

export const hadleLogin = (date: any): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading());
    try {
      const resultAction = await loginHandle(date);
      console.log("resultAction", resultAction);
      if (resultAction.data.request === "Credentials Incorrects") {
        Swal.fire(
          "Correcto",
          "Correo o contraseña incorrecto, Intenta de nuevo",
          "error"
        );
      } else if (resultAction.status === 200) {
        dispatch(
          setUser({
            token: resultAction.data.token,
            user: resultAction.data.user,
          } as any)
        );
      } else if (
        resultAction.data.response === 401 ||
        resultAction.data.request === "could not verify!"
      ) {
        console.log("entra al error");
        Swal.fire(
          "Correcto",
          "Error al iniciar sesión, intente nuevamente",
          "error"
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const editUser = (form: any): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading);
    try {
      const result = await editUserService(form);
      if (result.data.message === "Update user successfully!") {
        dispatch(
          setUserEdit({
            userEdit: result.data.data,
          } as any)
        );
        Swal.fire("Correcto", "Perfil Editado correctamente!!", "success");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addFile = (fileData: any, id: number): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading);
    try {
      const formData = new FormData();
      formData.append("post_image", fileData);
      const response = axios({
        method: "post",
        url: `https://api-roalytics.herokuapp.com/user_image/${id}`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((result) => {
        console.log("resultImage", result);
        if (
          result.data.message === "update user successfully!" ||
          result.data.response === 200
        ) {
          // Alerta
          Swal.fire("Correcto", "Imagen guardada correctamente!!", "success");
          dispatch(
            setProfilePicture({
              profilePicture: result.data.data.image_name,
              user: result.data.data,
            } as any)
          );
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeFile = (id: any): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading);
    try {
      const result = await createDeleteImageProfileService(id);
      if (result.data.message === "image user delete successfully!") {
        dispatch(
          setProfilePicture({
            user: result.data.data,
          } as any)
        );
        Swal.fire("Correcto", "Perfil Editado correctamente!!", "success");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const hadleLoginGoogle = (date: any): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading());
    try {
      const resultAction = await loginGoogle(date);
      console.log("resultAction", resultAction);
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
