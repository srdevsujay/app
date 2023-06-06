import styled from "styled-components";
import { TitleDashboard } from "./types";

export const Title = styled.label<TitleDashboard>(
  ({ fontSize, color, textDecorationLine, cursor }) => ({
    fontStyle: "normal",
    fontSize: fontSize,
    // fontWeight: "700",
    lineHeight: "20px",
    // letterSpacing: ".01em",
    letterSpacing: "-.03em",
    color: color,
    // margin: "10px 0",
    fontFamily: "Helvetica-NeueL-Title",
    textDecorationLine: textDecorationLine ? textDecorationLine : "",
    cursor: cursor ? cursor : "",
  })
);

export const TitleHelvetica = styled.label<TitleDashboard>(
  ({ fontSize, color }) => ({
    fontStyle: "normal",
    fontSize: fontSize,
    lineHeight: "20px",
    letterSpacing: ".01em",
    color: color,
    // margin: "10px 0",
    fontFamily: "Helvetica-NeueL",
  })
);
