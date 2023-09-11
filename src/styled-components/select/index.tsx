import styled from "styled-components";
import { MuiMenu } from "./type";

export const Select = styled.select`
  height: 38px !important;
  /* background: #fafafb !important; */
  background-color: ${(props) => props.theme.background};
  border: 1px solid #ced4da;
  /* color: #030229; */
  color: ${(props) => props.theme.text};
  font-size: 13px !important;
  opacity: 0.5;
  font-family: "Helvetica-NeueL";
  font-style: normal;
  font-weight: 400;
  border-radius: 5px;
  line-height: 1.5;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  display: block;
  background-clip: padding-box;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &focus {
    border-color: #4747c9;
  }
`;

export const MuiMenuList = styled.ul<MuiMenu>(({ background }) => ({
  "div > ul.MuiMenu-list": {
    background: background,
  },
  "& div > ul .MuiMenu-list": {
    background: background,
  },
  "& div > ul > .MuiMenu-list": {
    background: background,
  },
}));
