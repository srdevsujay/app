import styled from "styled-components";
import { cursorStyleTable, Position } from "./types";

export const Table = styled.div<Position>`
  div {
    box-shadow: none !important;
  }

  .MuiTableCell-alignLeft:first-child {
    padding-left: 0 !important;
  }
  .MuiTableCell-alignLeft {
    text-align: left;
  }
  .MuiTableCell-root {
    padding: 7px;
  }
  .widthDateLead {
    width: max-content;
  }

  .MuiTableRow-root {
    position: ${(props) => props.position};
  }
`;

export const TableStyle = styled.span<cursorStyleTable>(({ cursor }) => ({
  fontSize: "13px !important",
  fontFamily: "Helvetica-NeueL !important",
  color: "#464646 !important",
  fontWeight: "400 !important",
  display: "block",
  width: "max-content",
  cursor: cursor,
}));

export const TextColors = styled.span`
  font-size: 13px !important;
  font-family: "Helvetica-NeueL-Title" !important;
  &.text-danger {
    color: #e3507a !important;
  }

  &.text-green {
    color: #2bb596 !important;
  }

  &.text-grey {
    color: #464646 !important;
    opacity: 0.5;
  }
`;

export const BackColorsTable = styled.div`
  font-size: 12px !important;
  font-family: "Helvetica-NeueL-Title" !important;
  padding: 4px 10px 0 10px;
  height: 27px;
  width: auto;
  border-radius: 22.5px;
  text-align: center;
  &.back-danger-table {
    background: #e3507a20;
    color: #e3507a !important;
  }

  &.back-green-table {
    background-color: #a4e1d320;
    color: #2bb596 !important;
  }
  &.back-grey-table {
    background: #5d5f600f;
    color: #464646 !important;
    opacity: 0.5;
  }
`;

export const BackColorsTableOrigin = styled.div`
  font-size: 13px !important;
  font-family: "Helvetica-NeueL" !important;
  margin-bottom: 5px;
  border-radius: 2px;
  padding: 8px;
  display: flex;
  align-items: center;
  height: auto;
  width: max-content;

  &.back-lila {
    background: #4e14dd42;
    border: 0.7px solid #4e14dd;
    color: #4e14dd;
  }

  &.back-orange {
    background: #f0830342;
    border: 0.7px solid #f08303;
    color: #f08303;
  }

  &.back-orange > svg {
    height: 15px;
    margin-left: -6px;
  }

  &.back-green {
    background: #2bb59642;
    border: 0.7px solid #2bb596;
    color: #2bb596;
  }
`;
