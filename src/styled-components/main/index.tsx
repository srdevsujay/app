import styled from "styled-components";
import { CardProps, WidthSlider } from "./type";

// export const Main = styled.div`
//   width: 100%;
//   padding: 20px;
//   max-width: 97vw;
// `;

export const Main = styled.div<WidthSlider>(({ width }) => ({
  width: "100%",
  padding: "20px",
  maxWidth: width,
}));

export const Card = styled.div<CardProps>(({ height, borderRadius }) => ({
  boxShadow: "0 0 35px 0 rgb(154 161 171 / 15%)",
  borderRadius: borderRadius,
  marginBottom: "0 !important",
  height: height,
  overflow: "auto",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  minWidth: 0,
  wordWrap: "break-word",
  backgroundColor: "#fff",
  backgroundClip: "border-box",
  padding: "1.5rem",
}));
