import * as yup from "yup";

export const schema = () => {
  return yup.object().shape({
    fullName: yup.string().required("El nombre completo es requerido"),
    email: yup
      .string()
      .email("El correo electrónico debe ser un correo electrónico válido")
      .required("El correo electronico es requerido"),
    telephone: yup
      .number()
      .positive()
      .integer()
      .min(10)
      .required("El numero de telefono es requerido"),
    selectFunnel: yup.string().required(),
  });
};
