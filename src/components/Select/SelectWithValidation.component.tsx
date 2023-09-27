import React, {
  SelectHTMLAttributes,
  ChangeEventHandler,
  useContext,
} from "react";
import { Select } from "../../styled-components/select";
import { UseFormRegister } from "react-hook-form";
import { ErrorLabel } from "../../styled-components/input";
import { ThemeContext } from "../../utilities/theme/ThemeContext";

export interface Option {
  value: string;
  label: string;
}

type SelectProps = {
  label?: string;
  options: Option[];
  onChange?: (value: string) => void;
  name: string;
  error?: string;
  register: UseFormRegister<any>;
  setSelectAttribute?: any;
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, "onChange">;

const SelectWithValidation = (props: SelectProps) => {
  // const { label, onChange, options, ...otherPros } = props;
  const {
    label,
    onChange,
    name,
    options,
    register,
    error,
    setSelectAttribute,
    ...otherProps
  } = props;

  const handleChange: ChangeEventHandler<HTMLSelectElement> = ({ target }) => {
    onChange && onChange(target.value);
  };

  const { theme } = useContext(ThemeContext);

  return (
    <>
      {label ? <label htmlFor={name}>{label}</label> : ""}
      <Select
        {...register(name)}
        {...otherProps}
        onChange={handleChange}
        theme={theme}
      >
        {options.map((option: any, idx: number) => (
          <option key={idx} value={option.id || option.value}>
            {option.funnel_name || option.name}
          </option>
        ))}
      </Select>
      {error !== "undefined" ? <ErrorLabel>{error}</ErrorLabel> : ""}
    </>
  );
};

export default SelectWithValidation;
