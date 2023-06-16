import styled from "styled-components";

export const Input = styled.input`
  display: block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 0.45rem 0.9rem;
  font-size: 13px !important;
  font-family: "Helvetica-NeueL";
  font-weight: 400;
  line-height: 1.5;
  /* color: #030229;
  background-color: #fafafb; */
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  background-clip: padding-box;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  /* &focus {
    border-color: #4747c9;
  } */
`;

export const ContainerFilter = styled.div`
  height: 38px;
  /* background: white; */
  margin-left: 0.5rem !important;
  margin-right: 0.5rem !important;
`;

export const InputSearch = styled.input`
  display: block;
  width: 100%;
  height: 31px !important;
  padding: 0.45rem 0.9rem;
  font-size: 13px !important;
  font-family: "Helvetica-NeueL";
  font-weight: 400;
  line-height: 1.5;
  /* color: #030229; */
  color: ${(props) => props.theme.text};
  /* background-color: #fafafb; */
  background-color: ${(props) => props.theme.background};
  background-clip: padding-box;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  /* &focus {
    border-color: #4747c9;
  } */
`;

export const ErrorLabel = styled.label`
  color: rgb(231, 29, 54);
  font-family: "Helvetica-NeueL-Title";
  font-size: 14px;
`;

export const DropdownMenu = styled.div`
  background-color: ${(props) => props.theme.background};
`;
