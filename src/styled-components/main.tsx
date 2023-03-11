import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  padding: 20px 0px 20px 20px;
  max-width: 87vw;
`;

export const Card = styled.div`
  border: none;
  box-shadow: 0 0 35px 0 rgb(154 161 171 / 15%);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  margin-bottom: 0 !important;
  height: 75vh;
  overflow: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  padding: 1.5rem;
`;
