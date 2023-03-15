import styled from "styled-components";
import { TitleDashboard } from "./types";

export const Bar = styled.div`
  background: linear-gradient(75.37deg, #0043ff 25.69%, #a370f1 105.3%);
  border-radius: 1.5px;
  height: 3px;
  width: 100%;
  border: 1px solid;
`;

export const NewFunnel = styled.div`
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  height: 70px;
  border: 1px solid transparent;
  background: #f3f4f6;
`;

export const ButtonFunnel = styled.button`
  height: 40px;
  background: #fff;
  margin: 14px;
  text-align: center;
  width: 97%;
  border: none;
`;

// export const Title = styled.h4`
//   font-size: 13px;
//   line-height: 15px;
//   letter-spacing: 0.01em;
//   color: #192a3e;
//   font-family: "HelveticaNeueLTitle" !important;
// `;

export const Title = styled.text<TitleDashboard>(({ fontSize, color }) => ({
  fontStyle: "normal",
  fontSize: fontSize,
  fontWeight: "700",
  lineHeight: "20px",
  letterSpacing: ".01em",
  color: color,
  margin: "10px 0",
  fontFamily: "Helvetica-NeueL-Title",
}));

export const ButtonTitlePicker = styled.button`
  font-size: 10px !important;
  display: flex !important;
  justify-content: space-between;
  color: #333 !important;
  background-color: #fff !important;
  width: auto;
  border: 0.4px solid #575353 !important;
  border-radius: 5px !important;
  span {
    font-size: 10px !important;
    color: #333 !important;
    margin-right: 5px;
  }
`;

export const FilterSource = styled.div`
  div:first-child {
    width: 200px !important;
    margin-top: 0;
    height: 30px;
    font-size: 13px;
    font-family: helvetica;
  }
  div div:first-child {
    padding-top: 14px;
  }
`;

// export const TableStyle = styled.span`
//   font-size: 13px !important;
//   font-family: "Helvetica-NeueL" !important;
//   color: #464646 !important;
//   font-weight: 400 !important;
//   display: block;
//   width: max-content;
// `;

// export const TextColors = styled.span`
//   font-size: 13px !important;
//   font-family: "Helvetica-NeueL-Title" !important;
//   &.text-danger {
//     color: #e3507a !important;
//   }

//   &.text-green {
//     color: #2bb596 !important;
//   }
// `;

export const BackColorsTable = styled.div`
  font-size: 12px !important;
  font-family: "Helvetica-NeueL-Title" !important;
  padding: 4px 10px 0 10px;
  height: 27px;
  width: auto;
  border-radius: 22.5px;
  text-align: center;
  &.back-danger {
    background: #e3507a20;
    color: #e3507a !important;
  }

  &.back-green-table {
    background-color: #a4e1d320;
    color: #2bb596 !important;
  }
  &.back-grey {
    background: #5d5f600f;
    color: #464646 !important;
    opacity: 0.5;
  }
`;

export const DateData = styled.div`
  font-size: 12px !important;
  font-family: "Helvetica-NeueL-Title" !important;
  width: 100px;
`;

export const ContainerFiltersFunnel = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  padding-right: 22px !important;
  z-index: 9;
  margin-top: 8px;
`;
