import { ChangeEventHandler, InputHTMLAttributes, useContext } from "react";
import { Input } from "../../styled-components";
import { UseFormRegister } from "react-hook-form";
import { ErrorLabel } from "../../styled-components/input";
import { ThemeContext } from "../../utilities/theme/ThemeContext";

type InputProps = {
  label?: string;
  onChange?: (value: string) => void;
  name: string;
  error?: string;
  register: UseFormRegister<any>;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">;

const InputRegister = (props: InputProps) => {
  const { label, onChange, name, register, error, ...otherProps } = props;

  const { theme } = useContext(ThemeContext);

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Input theme={theme} {...register(name)} {...otherProps} />
      {error !== "undefined" ? <ErrorLabel>{error}</ErrorLabel> : ""}
    </>
  );
};

export default InputRegister;
