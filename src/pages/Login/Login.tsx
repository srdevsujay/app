import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import { useNavigate } from "react-router-dom";
import Marni from "../../assets/images/Marni.png";
import cubo from "../../assets/images/cubo.svg";
import portatil from "../../assets/images/portatil.png";
import dona from "../../assets/images/dona.svg";
import punto from "../../assets/images/punto.svg";
import barLogin from "../../assets/images/barrasLogin.svg";
import { Image, SpanColor } from "./styled-components/imagesLogin";
import { FlexColumnLogin } from "./styled-components";
import FooterMenu from "../../components/Footer";
import "./styled-components/style.css";
import ContainerRightLogin from "./components/ContainerRightLogin";

const Login = () => {
  const navigate = useNavigate();
  const onRegister = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    navigate("/signun");
  };

  let localStorageTheme: string | null | number | boolean =
    localStorage.getItem("Theme");

  console.log("localStorageTheme", localStorageTheme);

  return (
    <>
      {
        // loading
        // ?
        //   <div className="d-flex justify-content-center align-items-center height-load">
        //     <BounceLoader />
        //   </div>
        // :
        <>
          <div className="account-pages" style={{ width: "98%" }}>
            <div className="row justify-content-center">
              <FlexColumnLogin
                className={
                  localStorageTheme === "true"
                    ? "col-sm-5 back-theme-login-left"
                    : "col-sm-5"
                }
              >
                <Form />
                <div className="row mt-4">
                  <div className="col-12 text-center">
                    <p className="text-muted">
                      <span>¿No tenes una cuenta?</span>{" "}
                      <b onClick={onRegister}>Crear nueva cuenta</b>
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
          <FooterMenu />
        </>
      }
    </>
  );
};

export default Login;
