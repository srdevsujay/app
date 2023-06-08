import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../../hooks/appDispatch";
import { User } from "../../../models";
import { setUser } from "../../../redux/state/slices/login/authSlice";
import { useLoginUserMutation } from "../services/userService";
import { ButtonLogin, FormLogin, TitleH4 } from "../styled-components";
import logo from "../../../assets/images/logoRoalytics.png";
import {
  hadleLogin,
  hadleLoginGoogle,
} from "../../../redux/state/slices/login/loginThunk";
import GoogleLoginButton from "./GoogleLoginButton";
import { registerUserThunk } from "../../../redux/state/slices/register/thunk";

interface FormState {
  user: User;
}

const Form = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const usersub = useAppSelector((state) => state.user?.user);
  const subscriptionUser = useAppSelector(
    (state) => state.configuration?.subscriptionUser
  );
  const [userForm, setUserForm] = useState<FormState["user"]>({
    email: "",
    password: "",
  });

  const login = useAppSelector((state: any) => state.user.user);

  const { email, password } = userForm;

  const [
    loginUser,
    {
      data: loginData,
      isSuccess: isLoginSuccess,
      isError: isLoginError,
      error: loginError,
    },
  ] = useLoginUserMutation();
  const hadleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && password) {
      dispatch(hadleLogin({ email, password }));
    } else {
      toast.error("ingrese correo o contraseña");
    }
  };

  const handleGoogleLoginSuccess = (response: any) => {
    // Aquí puedes manejar la respuesta exitosa de inicio de sesión con Google
    console.log("Inicio de sesión exitoso:", response);
    const dataUser = {
      name: response.profileObj.givenName,
      last_name: response.profileObj.familyName,
      email: response.profileObj.email,
      password: response.googleId,
      image_name: "image",
      status: 1,
      user_type: 2,
      time_zone: "",
      type_currency: "0",
    };
    dispatch(registerUserThunk(dataUser));
    const dataToken = {
      token: response.tokenId,
    };
    dispatch(hadleLoginGoogle(dataToken));
  };

  const handleGoogleLoginFailure = (error: any) => {
    // Aquí puedes manejar el error de inicio de sesión con Google
    console.log("Error en el inicio de sesión:", error);
  };

  useEffect(() => {
    if (isLoginSuccess) {
      dispatch(
        setUser({
          user: loginData.user,
          token: loginData.token,
          dataRegister: loginData.dataRegister,
          isLoading: loginData.isLoading,
          userEdit: loginData.userEdit,
          profilePicture: loginData.profilePicture,
          pictureTime: loginData.pictureTime,
          deleteProfilePicture: loginData.deleteProfilePicture,
        })
      );
      if (
        usersub.usersub.length !== 0 ||
        Object.keys(subscriptionUser).length !== 0
      ) {
        console.log("navigate dash 1");
        navigate("/dashboard");
      } else if (usersub.user_type === 1) {
        console.log("navigate dashboard 2");
        navigate("/dashboard");
      } else if (usersub.user_type === 2) {
        console.log("navigate conf");
        navigate("/configuracion");
      }
    }
  }, [isLoginSuccess]);

  useEffect(() => {
    if (login !== null) {
      if (
        usersub.usersub.length !== 0 ||
        Object.keys(subscriptionUser).length !== 0
      ) {
        console.log("navigate dash 1 --");
        navigate("/dashboard");
      } else if (usersub.user_type === 1) {
        console.log("navigate dashboard 2 --");
        navigate("/dashboard");
      } else if (usersub.user_type === 2) {
        console.log("navigate conf --");
        navigate("/configuracion");
      }
    }
  }, [login]);

  return (
    <>
      <div className="text-center w-75">
        <TitleH4 className="text-dark-50 text-center mt-0 font-weight-bold mb-4">
          ¡Bienvenido a{" "}
          <span>
            <img src={logo} alt="" />
          </span>
          !
        </TitleH4>
      </div>
      <FormLogin onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="title-email">E-Mail</label>
          <input
            type="text"
            className="form-control"
            placeholder="example@gmail.com"
            name="email"
            defaultValue={userForm.email}
            onChange={hadleChange}
            style={{ backgroundColor: "#F7F7F8", color: "#030229" }}
          />
        </div>
        <div className="form-group">
          <label className="title-email">Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Contraseña"
            name="password"
            defaultValue={userForm.password}
            onChange={hadleChange}
            style={{ backgroundColor: "#F7F7F8", color: "#030229" }}
          />
        </div>
        <div className="form-group d-flex justify-content-between">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label check-recordarme">
              Recordarme
            </label>
          </div>
          <a className="restablecer-contraseña">Restablecer Contraseña</a>
        </div>
        <ButtonLogin className="mt-2">Iniciar Sesión</ButtonLogin>
        <div className="row mt-3">
          <div className="col-12 text-center">
            {/* <p className="text-crear-cuenta">¿No tenes una cuenta?<Link to="editPassword" className="crear-cuenta ml-1"><b>Crear nueva cuenta</b></Link></p> */}
          </div>
        </div>
        <div className="w-google">
          <GoogleLoginButton
            onSuccess={handleGoogleLoginSuccess}
            onFailure={handleGoogleLoginFailure}
          />
        </div>
      </FormLogin>
    </>
  );
};

export default Form;
