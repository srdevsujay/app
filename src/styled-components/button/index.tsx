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
  height: 31px !important;

  &:hover {
    background-color: rgba(16, 156, 241, 0.7019607843137254) !important;
  }
`;

export const ButtonsModal = styled.button`
  font-family: "Helvetica-NeueL-Title";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  border-radius: 5px;
  color: #3997ff;
  width: 100% !important;
  box-shadow: -14px 30px 20px rgba(0, 0, 0, 0.05);

  &.btn-close {
    background: #fff;
    border: 1px solid #3997ff;
  }

  &.btn-add {
    color: #fff !important;
    background-color: #109cf1 !important;
  }

  &.btn-add:hover {
    background-color: rgba(16, 156, 241, 0.7019607843137254) !important;
  }
`;

// const theme = {
//   main: "mediumseagreen"
// };
