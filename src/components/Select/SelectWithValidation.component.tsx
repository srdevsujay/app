import React, { SelectHTMLAttributes, ChangeEventHandler } from "react";
import { Select } from "../../styled-components/select";
import { UseFormRegister } from "react-hook-form";
import { ErrorLabel } from "../../styled-components/input";

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
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, "onChange">;

const SelectWithValidation = (props: SelectProps) => {
  // const { label, onChange, options, ...otherPros } = props;
  const { label, onChange, name, options, register, error, ...otherProps } =
    props;

  // const handleChange: ChangeEventHandler<HTMLSelectElement> = ({ target }) => {
  //   onChange && onChange(target.value);
  // };
  console.log("funnels", options);
  return (
    <>
      {label ? <label htmlFor={name}>{label}</label> : ""}
      <Select {...register(name)} {...otherProps}>
        {options.map((option: any, idx: number) => (
          <option key={idx} value={option.id}>
            {option.funnel_name || option.name}
          </option>
        ))}
      </Select>
      {error !== "undefined" ? <ErrorLabel>{error}</ErrorLabel> : ""}
    </>
  );
};

export default SelectWithValidation;
