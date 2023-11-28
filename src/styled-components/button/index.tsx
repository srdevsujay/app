import styled from "styled-components";

export const Button = styled.button`
  color: ${({ color }) => color};
`;

export const ButtonLogout = styled.div`
  width: 166px;
  transform: translateY(-68px);
  /* background: #fff; */
  height: 60px;
  position: absolute;
  bottom: 4vw;
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
    bottom: 4vw;
  }

  button.handleTheme {
    background: rgba(91, 147, 255, 0.06274509803921569);
    color: #5b93ff;
    margin-bottom: 5px;
    padding: 6px 9px;
    border-radius: 5px;
    font-family: "Helvetica-NeueL-Title";
    padding-left: 10px !important;
    transition: all 1.5s linear;
    font-size: 14px;
    bottom: 4vw;
  }
`;

export const ButtonTheme = styled.div`
  width: 166px;
  transform: translateY(-68px);
  /* background: #fff; */
  height: 60px;
  position: absolute;
  bottom: 0vw;
  left: 0;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  transition: all 1.5s linear;

  button.handleTheme {
    background: rgba(91, 147, 255, 0.06274509803921569);
    color: #5b93ff;
    margin-bottom: 5px;
    padding: 6px 9px;
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
  width: auto;
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
  color: ${(props) => props.theme.text};
  width: 100%;
  box-shadow: -14px 30px 20px rgba(0, 0, 0, 0.05);

  &.btn-close {
    background: #fff;
    border: 1px solid #3997ff;
    background-color: ${(props) => props.theme.background} !important;
  }

  &.btn-add {
    color: #fff !important;
    background-color: #109cf1 !important;
  }

  &.btn-close:hover {
    color: #3997ff;
    background-color: hsl(0deg 0% 96.41% / 54%);
  }

  &.btn-add:hover {
    background-color: rgba(16, 156, 241, 0.7019607843137254) !important;
  }
`;

export const ContainerSticky = styled.div`
  position: sticky;
  bottom: -0.9rem;
  background-color: ${(props) => props.theme.background};
`;

export const ButtonDeleteWithIcon = styled.button`
  font-family: "Helvetica-NeueL-Title";
  border-radius: 5px;
  padding-left: 10px !important;
  font-size: 14px;
  background: rgb(231 29 54 / 13%);
  color: #e71d36;

  img {
    margin-right: 8px;
  }

  &:hover {
    background: rgb(231 29 54 / 8%);
    color: #e71d36;
  }
`;

export const ContainerDropdown = styled.div`
  padding: 10px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`;

export const ColumnContainer = styled.div`
  height: 30px;
  width: auto;
  margin: 10px;
  padding: 4px 10px 0 10px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  border-radius: 5px;
  font-size: 13px;
  font-family: "Helvetica-NeueL-Title";
  white-space: nowrap;
`;

export const ContainerDropdownFilter = styled.div`
  height: 30px;
  width: auto;
  margin: 10px;
  padding: 4px 10px 0 10px;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
  border-radius: 5px;
  font-size: 13px;
  font-family: "Helvetica-NeueL-Title";
  white-space: nowrap;
`;

export const ButtonEditWithIcon = styled.button`
  background: rgb(91 147 255 / 13%);
  color: #5b93ff;
  font-family: "Helvetica-NeueL-Title";
  border-radius: 5px;
  padding-left: 10px !important;
  font-size: 14px;
  margin-bottom: 5px;

  img {
    margin-right: 8px;
  }

  &:hover {
    background: rgb(91 147 255 / 8%);
    color: #5b93ff;
  }
`;

// const theme = {
//   main: "mediumseagreen"
// };

export const ButtonsProfile = styled.button`
  background: #5b93ff10 !important;
  color: #3997ff !important;
  font-size: 13px !important;
  height: 31px !important;
  font-family: "Helvetica-NeueL-Title";
  font-weight: 600;
`;

export const ButtonDelete = styled.button`
  background: #fef4f5;
  color: #e71d36 !important;
  border-radius: 5px !important;
  width: 132px !important;
  height: 31px !important;
  font-size: 13px !important;
  font-family: "Helvetica-NeueL-Title";
  font-weight: 600;

  &.btn-delete-photo {
    background: rgb(231 29 54 / 13%);
  }
`;

export const CopyButton = styled.button`
  color: rgb(255, 255, 255);
  background-color: rgb(16, 156, 241);
  box-shadow: rgba(16, 156, 241, 0.24) 0px 4px 10px;
  border-radius: 5px;
  font-size: 13px;
  font-family: "Helvetica-NeueL-Title";

  :hover {
    color: rgb(255, 255, 255);
    background-color: rgba(16, 156, 241, 0.7019607843137254);
  }
`;

export const ButtonGoogle = styled.button`
  background: #4285f4 !important;
  color: #fff !important;
  border-radius: 0 !important;
  height: 40px !important;
  width: 240px !important;
  font-family: "Helvetica-NeueL-Title";
  font-size: 14px;
`;
