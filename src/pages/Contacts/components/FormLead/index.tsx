import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import InputRegister from "../../../../components/input/InputRegister.component";
import { yupResolver } from "@hookform/resolvers/yup";
import SelectComponent from "../../../../components/Select/index";
import { useAppSelector, useAppDispatch } from "../../../../hooks/appDispatch";
import SelectWithValidation from "../../../../components/Select/SelectWithValidation.component";
import {
  createLead,
  editLead,
} from "../../../../redux/state/slices/contacts/contactsThunk";
import { ButtonsModal } from "../../../../styled-components/button/index";
// import { schema } from "./yupSchemaLead";
import * as yup from "yup";

interface IFormInput {
  fullName: String;
}

type Option = {
  value: string;
  label: string;
};

const FormLead = ({ onClose, currentEdit, setCurrentEdit }: any) => {
  const dispatch = useAppDispatch();
  const funnels: any = useAppSelector((state) => state.dashboard.dataTracking);
  const [idEditLead, setIdEditLead] = useState<number>(0);
  const [selectFunnel, setSelectFunnel] = useState(funnels[0]?.id);
  const schema = yup.object().shape({
    fullName: yup.string().required("El nombre completo es requerido"),
    email: yup
      .string()
      .email("El correo electrónico debe ser un correo electrónico válido")
      .required("El correo electronico es requerido"),
    telephone: yup
      .number()
      .positive("This field must contain a positive number")
      .integer("This field should contain an integer")
      .min(10)
      .required("El numero de telefono es requerido"),
    selectFunnel: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (currentEdit) {
      console.log("currentEditLead", currentEdit);

      setValue("fullName", currentEdit.name);
      setValue("email", currentEdit.email);
      setValue("telephone", currentEdit.phone);
      setValue("selectFunnel", currentEdit.funnel_id);
      setIdEditLead(currentEdit.id);
    }
  }, [currentEdit, setValue]);

  const onSubmit = (data: any) => {
    console.log(data);
    if (idEditLead !== 0) {
      dispatch(editLead(data, idEditLead));
      setCurrentEdit();
      setIdEditLead(0);
    } else {
      dispatch(createLead(data));
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="form-group col-sm-12">
          <InputRegister
            placeholder="Ingresa tu nombre completo"
            label="Nombre"
            id="0"
            type="text"
            min={3}
            name="fullName"
            register={register}
            error={String(errors["fullName"]?.message)}
          />
        </div>
        <div className="form-group col-sm-12">
          <InputRegister
            placeholder="Ingresa tu correo electronico"
            label="E-mail Adress"
            id="0"
            type="text"
            min={3}
            name="email"
            register={register}
            error={String(errors["email"]?.message)}
          />
        </div>
        <div className="form-group col-sm-12">
          <InputRegister
            placeholder="Ingresa tu numero de telefono"
            label="Número de Telefono"
            id="0"
            type="number"
            min={3}
            name="telephone"
            register={register}
            error={String(errors["telephone"]?.message)}
          />
        </div>
        <div className="form-group col-sm-12">
          <SelectWithValidation
            label="Seleccionar Funnel"
            options={funnels}
            name="selectFunnel"
            register={register}
            error={String(errors["selectFunnel"]?.message)}
            disabled={currentEdit ? true : false}
          />
        </div>
      </div>
      <div className="row">
        <div className="form-group col-sm-6">
          <ButtonsModal className="btn btn-close" onClick={onClose}>
            Cerrar
          </ButtonsModal>
        </div>
        <div className="form-group col-sm-6">
          <ButtonsModal className="btn btn-add" type="submit">
            {idEditLead !== 0 ? "Editar" : "Guardar"}
          </ButtonsModal>
        </div>
      </div>
    </form>
  );
};

export default FormLead;
