import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/roalytics-logo-2.png";
import Marni from "../../../assets/images/Marni.png";
import portatil from "../../../assets/images/portatil.png";
import barrasLogin from "../../../assets/images/barrasLogin.svg";
import dona from "../../../assets/images/dona.svg";
import punto from "../../../assets/images/punto.svg";
import cubo from "../../../assets/images/cubo.svg";
import ContainerRightLogin from "./ContainerRightLogin";
import { restorePassword } from "../../../redux/state/slices/login/loginThunk";
import { useAppDispatch } from "../../../hooks/appDispatch";
import { ButtonLogin, FlexColumnLogin } from "../styled-components/form";

const RestorePassword = () => {
  let localStorageTheme: string | null | number | boolean =
    localStorage.getItem("Theme");
  const dispatch = useAppDispatch();
  const [user, setUser] = useState("");

  const onChangeUser = (e: any) => {
    setUser(e.target.value);
  };

  const doSubmit = () => {
    dispatch(restorePassword(user));
  };

  const year = new Date().getFullYear();

  return (
    <>
      <div className="account-pages" style={{ width: "98%" }}>
        <div className="row justify-content-center">
          <FlexColumnLogin
            className={
              localStorageTheme === "true"
                ? "col-sm-5 back-theme-login-left"
                : "col-sm-5"
            }
            style={{ justifyContent: "space-evenly" }}
          >
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box">
                  <h4 className="text-dark-50 text-center font-weight-bold title-bienvenido mt-4">
                    ¡Cambiar Contraseña!
                  </h4>
                </div>
              </div>
            </div>
            <form className="w-65">
              <div className="form-group">
                <label className="title-email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="email"
                  name="email"
                  defaultValue={user}
                  onChange={(e) => onChangeUser(e)}
                />
              </div>
              <ButtonLogin
                type="button"
                onClick={doSubmit}
                className="button-login mt-2 h"
              >
                Restablecer
              </ButtonLogin>
            </form>
            <div className="row">
              <div className="col-12 text-center">
                <p className="text-muted">
                  <Link
                    to="/login"
                    className="text-muted ml-1"
                    style={{ textDecoration: "none" }}
                  >
                    <b className="text-muted">Regresar al Login</b>
                  </Link>
                </p>
              </div>
            </div>
          </FlexColumnLogin>
          <div
            className={
              localStorageTheme === "true"
                ? "col-sm-7 back-theme-login-right"
                : "col-sm-7"
            }
          >
            <ContainerRightLogin />
          </div>
        </div>
      </div>
    </>
  );
};

export default RestorePassword;
