import React from "react";
import { Image, SpanColor } from "../styled-components";
import Marni from "../../../assets/images/Marni.png";
import cubo from "../../../assets/images/cubo.svg";
import portatil from "../../../assets/images/portatil.png";
import dona from "../../../assets/images/dona.svg";
import punto from "../../../assets/images/punto.svg";
import barLogin from "../../../assets/images/barrasLogin.svg";

const ContainerRightLogin = () => {
  return (
    <>
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
      <Image src={dona} width="65px" height="64px" top="33%" left="25.5%" />
      <Image src={punto} width="30px" height="30px" top="150px" right="39%" />
      <Image height="65px" width="86px" bottom="150px" right="12%" src={cubo} />
    </>
  );
};

export default ContainerRightLogin;
