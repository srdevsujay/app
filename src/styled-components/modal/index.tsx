import styled from "styled-components";
import { ModalWidthBox, ButtonClose } from "./types";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  z-index: 999;
`;

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

export const ModalBox = styled.div<ModalWidthBox>(
  ({ width, padding, bottom, height, overflowY, overflowX, theme }) => ({
    width: width,
    padding: padding,
    bottom: bottom,
    height: height,
    position: "relative",
    boxSizing: "border-box",
    borderRadius: "10px",
    backgroundColor: theme.background,
    cursor: "auto",
    overflowY: overflowY ? "auto" : "hidden",
    overflowX: overflowX ? "auto" : "hidden",
  })
);

// export const ModalBox = styled.div`
//   position: relative;
//   width: 80%;
//   margin: 0 10%;
//   padding: 50px;
//   box-sizing: border-box;
//   border-radius: 10px;
//   background-color: white;
//   cursor: auto;
//   width: ${(props: any) => props.width};
// `;

export const ModalTitle = styled.div`
  /* color: #9e25fc;
  font-size: 30px; */
  font-family: "Helvetica-NeueL-Title";
  font-size: 18px;
  /* color: #030229; */
  color: ${(props) => props.theme.text};
  line-height: 21px;
  font-style: normal;
  font-weight: 400;
  margin-top: 20px;
`;

export const ModalSubTitle = styled.div`
  font-family: "Helvetica-NeueL";
  font-size: 15px;
  color: ${(props) => props.theme.text};
  line-height: 21px;
  font-style: normal;
  font-weight: 400;
`;

export const ModalContent = styled.div`
  color: #6b6b6b;
  font-size: 16px;
`;

export const ModalClose = styled.button<ButtonClose>(({ top, right }) => ({
  position: "absolute",
  top: `${top ? top : "20px"}`,
  right: `${right ? right : "20px"}`,
  width: "35px",
  height: "35px",
  background: "rgba(16, 156, 241, 0.14901960784313725)",
  borderRadius: "20px",
  color: "#109cf1",
  fontSize: "17px",
  cursor: "pointer",
  border: "none",

  /* &:hover {
    transform: rotate(180deg);
  } */
}));
