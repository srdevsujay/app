import { Title } from "../../../../styled-components/Title/index";
import { dataSelectPayment } from "./dataSelectPayment";
import { Select } from "../../../../styled-components/select/index";
import ButtonReturnSelect from "./ButtonReturnSelect";
import creditCard from "../../../../assets/images/credit-card.png";
import paypalCard from "../../../../assets/images/paypal-card.png";
import { Bar } from "../../../Dashboard/styled-components/dashboardStyled";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const SelectFontPay = ({
  selectedPayment,
  onReturnSelect,
  handleChange,
}: any) => {
  return (
    <div
      className={`${
        selectedPayment === "1"
          ? "container mb-3 mt-4 d-block"
          : "container mb-3 mt-4 d-none"
      }`}
    >
      <Title fontSize="35px" color="#123249" className="text-center w-100">
        Seleccionar metodo de pago
      </Title>
      <Tooltip title="Volver a la meta">
        <IconButton className="return-select">
          <ButtonReturnSelect onReturnSelect={onReturnSelect} backStep={"0"} />
        </IconButton>
      </Tooltip>
      <div className="d-flex justify-content-center w-100 mt-2">
        <Bar width="38vw"></Bar>
      </div>
      {/* <Select
        value={selectedPayment}
        onChange={handleChange}
        className="container w-50 mb-3 mt-5 d-flex justify-content-center"
      >
        {dataSelectPayment.map((data) => (
          <option key={data.value} value={data.value}>
            {data.name}
          </option>
        ))}
      </Select> */}
      <div className="row" style={{ height: "50vh" }}>
        <div className="col-sm-6 d-flex align-items-center justify-content-center">
          <img
            src={creditCard}
            alt=""
            height="200"
            style={{ cursor: "pointer" }}
            onClick={() => handleChange("2")}
          />
        </div>
        <div className="col-sm-6 d-flex align-items-center justify-content-center">
          <img
            src={paypalCard}
            alt=""
            height="200"
            style={{ cursor: "pointer" }}
            onClick={() => handleChange("3")}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectFontPay;
