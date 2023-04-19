import React, { useEffect, useState } from "react";
import InputRegister from "../../../../components/input/InputRegister.component";
import { ButtonsModal } from "../../../../styled-components/button/index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Select from "react-select";
import { useAppSelector, useAppDispatch } from "../../../../hooks/appDispatch";
import { createTrafficSource } from "../../../../redux/state/slices/contacts/contactsThunk";

interface IData {
  email: string;
  first_origin: string;
  first_origintag: string | null;
  funnel_id: number;
  id: number;
  joined: string;
  last_origen: string;
  last_origentag: string | null;
  name: string;
  payments: number;
  phone: string;
}

const FormTrafficSource = ({ onClose, currentEdit }: any) => {
  const dispatch = useAppDispatch();
  const { dataLead } = useAppSelector((state) => state.contact);
  const [selectedOption, setSelectedOption] = useState<any>(null);

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("El correo electrónico debe ser un correo electrónico válido")
      .required("El correo electronico es requerido"),
    id_traffic: yup.number().integer().required("El precio es requerido"),
  });

  const initForm = () => {
    if (currentEdit) {
      const { email, id_traffic } = currentEdit;
    }
  };

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
      initForm();
      setValue("email", currentEdit.email);
      setValue("id_traffic", currentEdit.id_traffic);
      // setIdEditSale(currentEdit.id);
    }
  }, [currentEdit, setValue]);

  const onSubmit = (data: any) => {
    console.log("data", data);
    const form: any = {
      email: data.email,
      id_traffic_source: data.id_traffic,
      id_traffic_source_attribute: selectedOption.value,
    };
    console.log("form", form);
    dispatch(createTrafficSource(form));
    onClose();
  };

  const options = dataLead.map((d: IData) => ({
    value: d.id,
    label: d.email,
  }));

  const handleChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
  };

  console.log("selectedOption", selectedOption);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="form-group col-sm-12 mt-5">
          <label>Atributo de fuente de tráfico</label>
          <Select
            options={options}
            value={selectedOption}
            onChange={handleChange}
            placeholder="Buscar..."
            isClearable
          />
        </div>
        <div className="form-group col-sm-12">
          <InputRegister
            placeholder="Ingrese e-mail de reserva"
            label="Correo electrónico"
            id="0"
            type="text"
            disabled={true}
            min={3}
            name="email"
            register={register}
            error={String(errors["email"]?.message)}
          />
        </div>
        <div className="form-group col-sm-12">
          <InputRegister
            placeholder="Ingresa tu numero de telefono"
            label="Fuente de trafico"
            disabled={true}
            id="0"
            type="text"
            name="id_traffic"
            register={register}
            error={String(errors["id_traffic"]?.message)}
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
            Guardar
          </ButtonsModal>
        </div>
      </div>
    </form>
  );
};

export default FormTrafficSource;
