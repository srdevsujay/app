import styled from "styled-components";

export const Button = styled.button`
  color: ${({ color }) => color};
`;

export const ButtonLogout = styled.div`
  width: 166px;
  transform: translateY(-68px);
  background: #fff;
  height: 60px;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  transition: all 1.5s linear;

  button.handleLogout {
    background: rgba(91, 147, 255, 0.06274509803921569);
    color: #5b93ff;
    margin-bottom: 5px;
    padding: 5px;
    border-radius: 5px;
    font-family: "Helvetica-NeueL-Title";
    padding-left: 10px !important;
    transition: all 1.5s linear;
    font-size: 14px;
  }
`;

export const ButtonCreate = styled.button`
  color: #fff !important;
  background-color: #109cf1 !important;
  width: 118px;
  border-radius: 5px !important;
  font-family: "Helvetica-NeueL-Title" !important;
  box-shadow: 0 4px 10px rgba(16, 156, 241, 0.24);
  font-size: 11px !important;
  margin-right: 0.5rem !important;
`;

// const theme = {
//   main: "mediumseagreen"
// };
