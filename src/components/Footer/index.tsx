import React, { useState } from "react";
import ArrowUp from "../../../assets/images/ArrowUp.svg";
import ArrowDown from "../../../assets/images/ArrowDown.svg";
import { Link } from "react-router-dom";
import { Footer, FooterContainer } from "../../styled-components/Footer";

const FooterMenu = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <Footer className="footerMenu">
        <div className="franjaFooter"></div>
        <FooterContainer className="row">
          <nav>
            <Link to="/terminosycondiciones">Términos y Condiciones</Link> |{" "}
            <Link to="/politicas">Políticas de Privacidad</Link>
          </nav>
          <span>© {year} Roalytics</span>
        </FooterContainer>
      </Footer>
    </>
  );
};

export default FooterMenu;
