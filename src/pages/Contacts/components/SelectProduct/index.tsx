import React, { SelectHTMLAttributes, ChangeEventHandler } from "react";
import { UseFormRegister } from "react-hook-form";
import { Select } from "../../../../styled-components/select/index";
import { ErrorLabel } from "../../../../styled-components/input/index";
import { useState, useEffect } from "react";

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
  setSelectProductOnchange: any;
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, "onChange">;

const SelectOnlyForProduct = (props: SelectProps) => {
  // const { label, onChange, options, ...otherPros } = props;
  const {
    label,
    onChange,
    name,
    options,
    register,
    error,
    setSelectProductOnchange,
    ...otherProps
  } = props;

  console.log("ProductosSelect", options);

  return (
    <>
      {label ? <label htmlFor={name}>{label}</label> : ""}
      <Select
        {...register(name)}
        {...otherProps}
        onChange={(newValue: any) => {
          setSelectProductOnchange(newValue.target.value);
        }}
      >
        {options.map((option: any, idx: number) => (
          <option key={idx} value={option.name}>
            {option.name}
          </option>
        ))}
      </Select>
      {error !== "undefined" ? <ErrorLabel>{error}</ErrorLabel> : ""}
    </>
  );
};

export default SelectOnlyForProduct;
