import styled from "styled-components";

export const Accordion = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
  background: #fff;
  height: 42vh;
  max-height: 42vh;
`;

export const Recorrido = styled.div`
  width: 100%;
  display: flex;
  height: 60px !important;
  padding: 20px 0;

  .separator-route {
    border-right: 2px solid rgba(0, 0, 0, 0.12156862745098039);
    height: 12px;
    position: relative;
    left: 20px;
    bottom: 12px;
  }

  .venta {
    width: 15px;
    height: 15px;
  }

  .back-source-tag-recorrido {
    background: rgb(43 181 150/31%);
    border-radius: 2px;
    border: 0.7px solid #2bb596;
    padding: 8px;
    color: #605bff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
  }

  .img-recorrido {
    width: 40px;
    height: 30px;
    display: flex;
    justify-content: center;
    border: 1px solid #7370ff;
    border-radius: 5px;
    margin-top: 10px;
    margin-right: 10px;
  }

  .back-sale {
    background: rgba(43, 181, 150, 0.2);
    border-radius: 5px;
    border: 0.7px solid #2bb596;
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .item-recorrido {
    border: 0.4px solid #3997ff;
    border-radius: 5px;
    height: 50px;
    width: 100%;
    background: rgba(57, 151, 254, 0.1);
    display: flex;
    justify-content: space-between;
  }

  .tag-recorrido {
    height: inherit;
    color: #7d848b;
    display: flex;
    /* border-bottom: 1px solid #3997FF; */
    align-items: center;
    cursor: pointer;
    justify-content: space-between;
    padding: 0 15px;
  }

  .event_name {
    opacity: 0.5;
  }

  .back-action-tag-recorrido {
    background: #f0830342;
    border-radius: 2px;
    border: 0.7px solid #f08303;
    padding: 8px;
    color: #f08303;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
  }

  .back-source-tag-recorrido {
    /* background: rgb(43 181 150 / 31%); */
    background: #605bff42;
    border-radius: 2px;
    /* border: 0.7px solid #2BB596; */
    border: 0.7px solid #605bff;
    padding: 8px;
    color: #2bb596;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
  }

  .back-sale-tag-recorrido {
    background: rgb(43 181 150 / 31%);
    /* background: #605bff42; */
    border-radius: 2px;
    border: 0.7px solid #2bb596;
    /* border: 0.7px solid #605BFF; */
    padding: 8px;
    color: #605bff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
  }

  .back-action {
    background: #f0830342;
    border-radius: 5px;
    border: 0.7px solid #f08303;
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .back-source {
    background: #605bff26;
    /* background: rgba(43, 181, 150, 0.2); */
    border-radius: 5px;
    border: 0.7px solid #605bff;
    /* border: 0.7px solid #2BB596; */
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .back-action_detail_user {
    background: #f0830310;
    border-radius: 5px;
    border: 0.7px solid #f08303;
    height: 26px;
    width: max-content;
    display: flex;
    align-items: center;
    padding: 8px;
  }

  .back-source_detail_user {
    /* background: rgb(43 181 150 / 31%); */
    background: #605bff42;
    border-radius: 5px;
    /* border: 0.7px solid #2BB596; */
    border: 0.7px solid #605bff;
    height: 26px;
    width: max-content;
    display: flex;
    align-items: center;
    padding: 8px;
  }

  .back-sale_detail_user {
    /* background: #605bff42; */
    background: rgb(43 181 150 / 31%);
    border-radius: 5px;
    /* border: 0.7px solid #605BFF; */
    border: 0.7px solid #2bb596;
    height: 26px;
    width: max-content;
    display: flex;
    align-items: center;
    padding: 8px;
  }

  .back_telephone_detail_user {
    background: #e3517a5e;
    border-radius: 5px;
    border: 0.7px solid #e3517a;
    height: 26px;
    width: max-content;
    display: flex;
    align-items: center;
    padding: 8px;
  }

  .back_view_detail_user {
    background: #3997ff54;
    border-radius: 5px;
    border: 0.7px solid #3997ff;
    height: 26px;
    width: max-content;
    display: flex;
    align-items: center;
    padding: 8px;
  }

  .back-action_color {
    color: #f08303;
    font-size: 12px;
    font-family: "Helvetica-NeueL-Title";
  }

  .back-source_color {
    color: #2bb596;
    font-size: 12px;
    font-family: "Helvetica-NeueL-Title";
  }

  .back-sale_color {
    color: #605bff;
    font-size: 12px;
    font-family: "Helvetica-NeueL-Title";
  }

  .content-recorrido span:first-child {
    margin-left: 10px;
  }

  .content-recorrido span {
    font-family: "Helvetica-NeueL-Title";
  }

  .content-recorrido span:nth-child(2),
  .content-recorrido span:nth-child(3),
  .content-recorrido span:nth-child(4) {
    margin-left: 5px;
  }

  .back-telephone-tag-recorrido {
    background: #e3517a5e;
    border-radius: 2px;
    border: 0.7px solid #e3517a;
    padding: 8px;
    color: #e3517a;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
  }

  .back-telephone {
    background: #e3517a42;
    border-radius: 5px;
    border: 0.7px solid #e3517a;
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .back-view-tag-recorrido {
    background: #3997ff54;
    border-radius: 2px;
    border: 0.7px solid #3997ff6b;
    padding: 8px;
    color: #f08303;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
  }

  .back-view {
    background: #ebf5ff;
    border-radius: 5px;
    border: 0.7px solid #3997ff6b;
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;
