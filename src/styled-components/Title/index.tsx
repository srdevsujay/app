import styled from "styled-components";
import { TitleDashboard } from "./types";

export const Title = styled.text<TitleDashboard>(({ fontSize, color }) => ({
  fontStyle: "normal",
  fontSize: fontSize,
  // fontWeight: "700",
  lineHeight: "20px",
  // letterSpacing: ".01em",
  letterSpacing: "-.03em",
  color: color,
  margin: "10px 0",
  fontFamily: "Helvetica-NeueL-Title",
}));

export const TitleHelvetica = styled.text<TitleDashboard>(
  ({ fontSize, color }) => ({
    fontStyle: "normal",
    fontSize: fontSize,
    lineHeight: "20px",
    letterSpacing: ".01em",
    color: color,
    margin: "10px 0",
    fontFamily: "Helvetica-NeueL",
  })
);
