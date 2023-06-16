import React, { useState, useContext } from "react";
import ArrowUp from "../../../assets/images/ArrowUp.svg";
import ArrowDown from "../../../assets/images/ArrowDown.svg";
import { Link } from "react-router-dom";
import { Footer, FooterContainer } from "../../styled-components/Footer";
import { ThemeContext } from "../../utilities/theme/ThemeContext";
import { Bar } from "../../pages/Dashboard/styled-components/dashboardStyled";

const FooterMenu = () => {
  const year = new Date().getFullYear();
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Footer className="footerMenu" theme={theme}>
        {/* <div className="franjaFooter"></div> */}
        <Bar></Bar>
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
