import styled from "styled-components";

export const CardPlatform = styled.div`
  height: 160px;
  display: flex;
  align-items: center;
  background: #fff;
  box-shadow: 0 14px 40px rgb(109 141 173/25%);
  border-radius: 10px;

  .title-card {
    font-weight: 500;
    font-size: 16px;
    letter-spacing: -0.03em;
    color: #192a3e;
    font-style: normal;
    line-height: 143%;
    font-family: "Helvetica-NeueL-Title";
  }

  .card-body {
    padding: 0px;
    font-family: "Helvetica-NeueL-Title";
    font-weight: 400;
    font-size: 12px;
    color: #8f8f8f;
  }

  .imgApi {
    margin: 0 20px;
    position: relative;
    top: 10px;
  }

  .ApiText {
    text-align: center;
    margin-top: 10px;
    padding: 10px;
  }

  .activeIntegration {
    position: absolute;
    top: 0;
    left: 20px;
  }

  .click-here {
    cursor: pointer;
    text-decoration-line: underline !important;
    font-family: "Helvetica-NeueL-Title";
    color: #3997ff !important;
  }
`;

export const SeeImplementation = styled.a`
  color: inherit;
  cursor: pointer;
  font-family: "Helvetica-NeueL-Title";
`;

export const ContainerBilling = styled.div`
  height: 160px;
  width: 30vw;
  margin-top: 30px;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: #fff;
  box-shadow: 0 14px 40px rgb(109 141 173/25%);
  border-radius: 10px;
  display: block;
`;
