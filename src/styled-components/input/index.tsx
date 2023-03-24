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
  color: #030229;
  background-color: #fafafb;
  background-clip: padding-box;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  /* &focus {
    border-color: #4747c9;
  } */
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
  color: #030229;
  background-color: #fafafb;
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
