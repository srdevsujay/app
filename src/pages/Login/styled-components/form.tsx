import styled from "styled-components";

export const FormLogin = styled.form`
  width: 65%;

  .check-recordarme {
    font-family: "Helvetica-NeueL";
  }

  .restablecer-contraseña {
    font-family: "Helvetica-NeueL-Title" !important;
  }

  .restablecer-contraseña:hover {
    text-decoration: underline !important;
    opacity: 0.7 !important;
    cursor: pointer;
    color: #3997ff !important;
  }

  .w-google > button {
    width: 100%;
    font-family: "Helvetica-NeueL-Title" !important;
  }
`;

export const FlexColumnLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  height: 100vh;

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000;
    font-family: "Helvetica-NeueL-Title";
  }

  b {
    color: #3997ff;
    font-size: 16px;
    font-family: "Helvetica-NeueL-Title";
    cursor: pointer;
  }

  .overFY {
    overflow-y: overlay !important;
  }
`;

export const ButtonLogin = styled.button`
  font-style: normal !important;
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 19px !important;
  height: 50px !important;
  background: #3997ff !important;
  border-radius: 5px !important;
  font-family: "Helvetica-NeueL-Title" !important;
  color: #fff !important;
  width: 100% !important;
  border: none;
`;

export const TitleH4 = styled.h4`
  color: ${(props) => props.theme.text};
  font-family: "Helvetica-NeueL-Title" !important;
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 139.5%;
`;
