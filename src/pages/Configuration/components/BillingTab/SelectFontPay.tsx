import { TitleHelvetica } from "../../../../styled-components/Title/index";
import { dataSelectPayment } from "./dataSelectPayment";
import { Select } from "../../../../styled-components/select/index";
import ButtonReturnSelect from "./ButtonReturnSelect";

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
      <TitleHelvetica fontSize="35px" className="text-center mt-4 w-100">
        Selecciona tu fuente de pago
      </TitleHelvetica>
      <ButtonReturnSelect onReturnSelect={onReturnSelect} backStep={"0"} />
      <Select
        value={selectedPayment}
        onChange={handleChange}
        className="container w-50 mb-3 mt-5 d-flex justify-content-center"
      >
        {dataSelectPayment.map((data) => (
          <option key={data.value} value={data.value}>
            {data.name}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default SelectFontPay;
