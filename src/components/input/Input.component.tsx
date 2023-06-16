import { ChangeEventHandler, InputHTMLAttributes, useContext } from "react";
import { InputSearch } from "../../styled-components/input";
import { ThemeContext } from "../../utilities/theme/ThemeContext";

type InputProps = {
  label?: string;
  onChange?: (value: string) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">;

const InputComponent = (props: InputProps) => {
  const { label, onChange, ...otherProps } = props;

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) =>
    onChange && onChange(target.value);

  const { theme } = useContext(ThemeContext);

  return (
    <>
      {label ? <label htmlFor={otherProps.id}>{label}</label> : ""}
      <InputSearch onChange={handleChange} {...otherProps} theme={theme} />
    </>
  );
};

export default InputComponent;
