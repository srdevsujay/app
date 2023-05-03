import React from "react";
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

const Login = () => {
  const navigate = useNavigate();

  const onRegister = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    navigate("/signun");
  };

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
              <FlexColumnLogin className="col-sm-5">
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
              <div className="col-sm-7">
                <SpanColor
                  width="323px"
                  height="124px"
                  left="17.2%"
                  filter="blur(44px)"
                  background="#3997ff"
                  bottom="0"
                ></SpanColor>
                <SpanColor
                  width="63px"
                  height="31px"
                  left="5%"
                  filter="blur(35px)"
                  background="#3997ff"
                  bottom="24.5%"
                ></SpanColor>
                <SpanColor
                  width="79px"
                  height="79px"
                  left="33.5%"
                  filter="blur(44px)"
                  background="#D64682"
                  bottom="37.4%"
                ></SpanColor>
                <Image
                  height="470px"
                  left="5%"
                  bottom="30px"
                  src={Marni}
                  style={{ zIndex: "99" }}
                />
                <Image src={barLogin} height="301px" left="4%" bottom="70px" />
                <Image src={portatil} height="190px" top="160px" right="17%" />
                <Image
                  src={dona}
                  width="65px"
                  height="64px"
                  top="33%"
                  left="25.5%"
                />
                <Image
                  src={punto}
                  width="30px"
                  height="30px"
                  top="150px"
                  right="39%"
                />
                <Image
                  height="65px"
                  width="86px"
                  bottom="150px"
                  right="12%"
                  src={cubo}
                />
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
