import styled from "styled-components";
import { BarHorizontal } from "./types";

export const Bar = styled.div<BarHorizontal>(({ width }) => ({
  background: "linear-gradient(75.37deg, #0043ff 25.69%, #a370f1 105.3%)",
  borderRadius: "1.5px",
  height: "3px",
  width: !width ? "100%" : width,
  // border: "1px solid linear-gradient(75.37deg, #0043ff 25.69%, #a370f1 105.3%)",
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
    width: 236px !important;
    margin-top: 0;
    height: 30px;
    font-size: 13px;
    font-family: helvetica;
  }
  div div:first-child {
    padding-top: 14px;
    font-family: "Helvetica-NeueL-Title";
  }
`;

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

export const HeaderTitleGraphic = styled.div`
  font-family: "Helvetica-NeueL-Title";
  font-size: 13px;
  padding: 10px 0 !important;
  margin-top: 0.5rem !important;
  justify-content: center !important;
  display: flex;
  border-bottom: 1px solid #ebeff2;
`;

export const TableExpanded = styled.table`
  width: 100%;
  display: inline-table;
  /* background: red; */

  thead {
    width: 100%;
    display: inline-table;
  }

  /* td {
    width: 10%;
  } */

  .font-Title-Helvetica {
    font-family: "Helvetica-NeueL-Title";
  }

  .font-body-Helvetica {
    font-family: "Helvetica-NeueL";
    font-size: 13px !important;
    color: #464646 !important;
  }

  /* td.MuiTableCell-root.MuiTableCell-body.MuiTableCell-paddingNone {
    background: #e5e2e24a;
  } */
`;
