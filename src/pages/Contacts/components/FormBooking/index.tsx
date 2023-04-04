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
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

interface IFormInput {
  fullName: String;
}

type Option = {
  value: string;
  label: string;
};

const FormBooking = ({ onClose, currentEdit, setCurrentEdit }: any) => {
  const dispatch = useAppDispatch();
  const funnels = useAppSelector((state) => state.dashboard.dataTracking);
  const [idEditLead, setIdEditLead] = useState<number>(0);
  const [name, setName] = useState();
  const [nameDate, setNameDate] = useState();
  const [email, setEmail] = useState();
  const [callDate, setCallDate] = useState<Date>();
  const [appoimentDate, setAppoimentDate] = useState<Date>();
  const [today, setToday] = useState(new Date());
  const schema = yup.object().shape({
    fullName: yup.string().required("El nombre completo es requerido"),
    nameDate: yup.string().required("El nombre del booking es requerid"),
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

  const initForm = () => {
    if (currentEdit) {
      console.log("currentEdit", currentEdit);
      const {
        name: nameParam,
        name_date,
        email: emailParam,
        call_date,
        appoiment_date,
      } = currentEdit;
      setName(nameParam);
      setNameDate(name_date);
      setEmail(emailParam);
      setCallDate(new Date(call_date));
      setAppoimentDate(new Date(appoiment_date));
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
      // setValue("callDate", currentEdit.call_date);
      // setValue("appoimentDate", currentEdit.appoiment_date);
      setIdEditLead(currentEdit.id);
    }
  }, [currentEdit, setValue]);

  useEffect(() => {
    setValue("fullName", name);
  }, [name]);

  useEffect(() => {
    setValue("nameDate", nameDate);
  }, [nameDate]);

  useEffect(() => {
    setValue("email", email);
  }, [email]);

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

  console.log("today", today);
  console.log("currentEdit?.call_date", currentEdit?.call_date);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="form-group col-sm-12">
          <InputRegister
            placeholder="Ingresa tu nombre completo"
            label="Nombre completo"
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
            placeholder="Ingresa el nombre del Booking"
            label="Nombre del Booking"
            id="0"
            type="text"
            min={3}
            name="nameDate"
            register={register}
            error={String(errors["nameDate"]?.message)}
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
          <SelectWithValidation
            label="Seleccionar Funnel"
            options={funnels}
            name="selectFunnel"
            register={register}
            error={String(errors["selectFunnel"]?.message)}
          />
        </div>
        <div className="form-group col-sm-12 date-width">
          <label className="title-label-popup w-100">
            Fecha y Hora de Creación
          </label>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DemoContainer components={["DateTimePicker"]}>
              <DateTimePicker
                // name="callDate"
                // value={currentEdit?.call_date}
                // onChange={(newValue) => {
                //   setDateCurrent(newValue);
                // }}
                value={callDate ? callDate : today}
                disabled
                label="Ingresa Fecha y Hora"
              />
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <div className="form-group col-sm-12 date-width">
          <label className="title-label-popup w-100">
            Fecha y Hora de la cita
          </label>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DemoContainer components={["DateTimePicker"]}>
              <DateTimePicker
                // label="Ingresa Fecha y Hora"
                // value={dateAppointment}
                // minDate={today}
                // onChange={(newValue) => {
                //   setDateAppointment(newValue);
                // }}
                value={appoimentDate ? appoimentDate : today}
              />
            </DemoContainer>
          </LocalizationProvider>
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

export default FormBooking;
