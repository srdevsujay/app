import { ChangeEventHandler, InputHTMLAttributes } from "react";
import { Input } from "../../styled-components";
import { UseFormRegister } from "react-hook-form";
import { ErrorLabel } from "../../styled-components/input";

type InputProps = {
  label?: string;
  onChange?: (value: string) => void;
  name: string;
  error?: string;
  register: UseFormRegister<any>;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">;

const InputRegister = (props: InputProps) => {
  const { label, onChange, name, register, error, ...otherProps } = props;
  console.log("errorerror", error);

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Input {...register(name)} {...otherProps} />
      {error !== "undefined" ? <ErrorLabel>{error}</ErrorLabel> : ""}
    </>
  );
};

export default InputRegister;
