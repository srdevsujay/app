import styled from "styled-components";

export const NewFunnel = styled.div`
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  height: 70px;
  border: 1px solid transparent;
  background-color: ${(props) => props.theme.background};
`;

export const ButtonFunnel = styled.button`
  height: 40px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  margin: 14px;
  text-align: center;
  width: 97%;
  border: none;
`;

export const ContainerAccordion = styled.div`
  border-bottom: 1px solid #80808026;
  position: sticky;

  .width-vw {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
  }
`;

export const ButtonFilter = styled.button`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`;
