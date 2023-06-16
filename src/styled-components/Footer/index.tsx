import styled from "styled-components";

export const Footer = styled.div`
  bottom: 0;
  right: 0;
  color: ${(props) => props.theme.text};
  position: absolute;
  width: 100%;
  background: ${(props) => props.theme.background};
  z-index: 99;

  /* .franjaFooter {
    height: 3px;
    left: 245px;
    top: calc(50% - 351px);
    background: linear-gradient(75.37deg, #0043ff 25.69%, #a370f1 105.3%);
    border-radius: 1.5px;
  } */
`;

export const FooterContainer = styled.div`
  padding: 20px;
  padding-left: 4.5rem;
  padding-right: 4.5rem;
  margin-right: 0;
  justify-content: space-between;
  nav,
  span {
    font-family: "Helvetica-NeueL-Title";
  }
`;
