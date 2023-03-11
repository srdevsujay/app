import { ChangeEventHandler, InputHTMLAttributes } from "react";
import { Input } from "../../styled-components";

type InputProps = {
  label?: string;
  onChange?: (value: string) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">;

const InputComponent = (props: InputProps) => {
  const { label, onChange, ...otherProps } = props;

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) =>
    onChange && onChange(target.value);

  return (
    <>
      {label ? <label htmlFor={otherProps.id}>{label}</label> : ""}
      <Input onChange={handleChange} {...otherProps} />
    </>
  );
};

export default InputComponent;
