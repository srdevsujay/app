import React, {
  SelectHTMLAttributes,
  ChangeEventHandler,
  useContext,
} from "react";
import { Select } from "../../styled-components/select";
import { ThemeContext } from "../../utilities/theme/ThemeContext";
export interface Option {
  value: string;
  label: string;
}

type SelectProps = {
  label?: string;
  options: Option[];
  value?: number;
  onChange?: (value: string) => void;
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, "onChange">;

const SelectComponent = (props: any) => {
  const { label, onChange, value, options, ...otherPros } = props;

  const handleChange: ChangeEventHandler<HTMLSelectElement> = ({ target }) => {
    onChange && onChange(target.value);
  };

  const { theme } = useContext(ThemeContext);

  return (
    <>
      {label ? <label htmlFor={otherPros.id}>{label}</label> : ""}
      <Select
        onChange={handleChange}
        value={value || ""}
        {...otherPros}
        theme={theme}
      >
        <option value="" disabled>
          Selecciona una opción
        </option>
        {options.map((option: any, idx: number) => (
          <option key={idx} value={option.value} disabled={option.disabled}>
            {option.label}
          </option>
        ))}
      </Select>
    </>
  );
};

export default SelectComponent;
