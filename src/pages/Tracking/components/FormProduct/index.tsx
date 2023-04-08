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
import { createProduct } from "../../../../redux/state/slices/tracking/trackingThunk";

const FormProducts = ({ onClose, currentEdit, setCurrentEdit }: any) => {
  const dispatch = useAppDispatch();
  const funnels: any = useAppSelector((state) => state.dashboard.dataTracking);
  const [idEditLead, setIdEditLead] = useState<number>(0);
  const [selectFunnel, setSelectFunnel] = useState(funnels[0]?.id);
  const schema = yup.object().shape({
    name: yup.string().required("El nombre del producto es requerido"),
    category: yup.string().required("La Categoria es requerido"),
    price: yup
      .number()
      .positive("El precio debe ser mayor a 0")
      .required("El precio es requerido"),
    sku: yup
      .number()
      .positive("El sku debe ser mayor a 0")
      .required("El sku es requerido"),
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

      setValue("name", currentEdit.name);
      setValue("email", currentEdit.email);
      setValue("telephone", currentEdit.phone);
      setValue("selectFunnel", currentEdit.funnel_id);
      setIdEditLead(currentEdit.id);
    }
  }, [currentEdit, setValue]);

  const onSubmit = (data: any) => {
    data.tag = `$${data.name}`;
    console.log(data);
    if (idEditLead !== 0) {
      dispatch(editLead(data, idEditLead));
      setCurrentEdit();
      setIdEditLead(0);
    } else {
      dispatch(createProduct(data));
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="form-group col-sm-12">
          <InputRegister
            placeholder="Nombre del producto"
            label="Nombre del producto"
            id="0"
            type="text"
            min={3}
            name="name"
            register={register}
            error={String(errors["name"]?.message)}
          />
        </div>
        <div className="form-group col-sm-12">
          <InputRegister
            placeholder="Ingresa la categoria"
            label="Categoria"
            id="0"
            type="text"
            min={3}
            name="category"
            register={register}
            error={String(errors["category"]?.message)}
          />
        </div>
        <div className="form-group col-sm-12">
          <InputRegister
            // placeholder="Ingresa tu numero de telefono"
            label="Precio"
            id="0"
            type="number"
            name="price"
            register={register}
            error={String(errors["price"]?.message)}
          />
        </div>
        <div className="form-group col-sm-12">
          <InputRegister
            // placeholder="Ingresa tu numero de telefono"
            label="Sku"
            id="0"
            type="number"
            name="sku"
            register={register}
            error={String(errors["sku"]?.message)}
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

export default FormProducts;
