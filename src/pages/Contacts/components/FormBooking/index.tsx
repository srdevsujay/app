import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import InputRegister from "../../../../components/input/InputRegister.component";
import { yupResolver } from "@hookform/resolvers/yup";
import SelectComponent from "../../../../components/Select/index";
import { useAppSelector, useAppDispatch } from "../../../../hooks/appDispatch";
import SelectWithValidation from "../../../../components/Select/SelectWithValidation.component";
import {
  createBooking,
  editBooking,
  editLead,
} from "../../../../redux/state/slices/contacts/contactsThunk";
import { ButtonsModal } from "../../../../styled-components/button/index";
// import { schema } from "./yupSchemaLead";
import * as yup from "yup";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { stateBooking } from "../../models/routes";
import SelectStateBooking from "../SelectStateBooking/index";
import moment from "moment";

interface IFormInput {
  fullName: String;
}

type Option = {
  value: string;
  label: string;
};

const FormBooking = ({ onClose, currentEdit, setCurrentEdit }: any) => {
  const dispatch = useAppDispatch();
  const today = new Date();
  const funnels: any = useAppSelector((state) => state.dashboard.dataTracking);
  const [idEditBooking, setIdEditBooking] = useState<number>(0);
  const [name, setName] = useState();
  const [nameDate, setNameDate] = useState();
  const [email, setEmail] = useState();
  const [callDate, setCallDate] = useState<Date>(today);
  const [appoimentDate, setAppoimentDate] = useState<Date>(today);
  const [selectFunnel, setSelectFunnel] = useState(funnels[0]?.id);
  const [selectState, setSelectState] = useState(stateBooking[0]?.value);
  const schema = yup.object().shape({
    fullName: yup.string().required("El nombre completo es requerido"),
    nameDate: yup.string().required("El nombre del booking es requerid"),
    email: yup
      .string()
      .email("El correo electrónico debe ser un correo electrónico válido")
      .required("El correo electronico es requerido"),
    selectFunnel: yup.string().required(),
    selectState: yup.string().required(),
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
        funnel_id,
        status,
      } = currentEdit;
      setName(nameParam);
      setNameDate(name_date);
      setEmail(emailParam);
      setCallDate(new Date(call_date));
      setAppoimentDate(new Date(appoiment_date));
      setSelectFunnel(funnel_id);
      setSelectState(status);
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
      setIdEditBooking(currentEdit.id);
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

  useEffect(() => {
    setValue("selectFunnel", selectFunnel);
  }, [selectFunnel]);

  useEffect(() => {
    setValue("selectState", selectState);
  }, [selectState]);

  useEffect(() => {
    setValue("appoimentDate", appoimentDate);
  }, [appoimentDate]);

  useEffect(() => {
    setValue("callDate", callDate);
  }, [callDate]);

  const onSubmit = (data: any) => {
    console.log("data--", data);
    console.log("callDate", callDate);
    console.log("appoimentDate", appoimentDate);
    const currentCallDate = moment(callDate).format("YYYY-MM-DD hh:mm:ss");
    const currentAppoimentDate = moment(appoimentDate).format(
      "YYYY-MM-DD hh:mm:ss"
    );
    const form: any = {
      appoiment_date: currentAppoimentDate,
      call_date: currentCallDate,
      email: data.email,
      funnel_id: data.selectFunnel,
      name: data.fullName,
      name_date: data.nameDate,
      status: data.selectState,
    };
    if (idEditBooking !== 0) {
      form.id = currentEdit.id;
      dispatch(editBooking(form));
      setCurrentEdit();
      setIdEditBooking(0);
    } else {
      dispatch(createBooking(form));
    }
    onClose();
  };

  console.log("callDate", callDate);
  console.log("appoimentDate", appoimentDate);

  console.log("today", today);
  console.log("currentEdit?.call_date", currentEdit?.call_date);
  console.log("funnels--", funnels);
  console.log("stateBooking--", stateBooking);

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
        <div className="form-group col-sm-12 date-width">
          <label className="title-label-popup w-100">
            Fecha y Hora de Creación
          </label>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              value={appoimentDate}
              disabled
              label="Ingresa Fecha y Hora"
            />
          </LocalizationProvider>
        </div>
        <div className="form-group col-sm-12 date-width">
          <label className="title-label-popup w-100">
            Fecha y Hora de la cita
          </label>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              value={callDate}
              minDate={today}
              onChange={(newValue: any) => {
                setCallDate(newValue);
              }}
            />
          </LocalizationProvider>
        </div>
        <div className="form-group col-sm-12">
          <SelectStateBooking
            label="Seleccionar Estado"
            options={stateBooking as any}
            name="selectState"
            register={register}
            error={String(errors["selectState"]?.message)}
            currentEdit={currentEdit}
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
            {idEditBooking !== 0 ? "Editar" : "Guardar"}
          </ButtonsModal>
        </div>
      </div>
    </form>
  );
};

export default FormBooking;
