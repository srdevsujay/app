import React, { useEffect, useState, useContext } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import InputRegister from "../../../../components/input/InputRegister.component";
import { yupResolver } from "@hookform/resolvers/yup";
import SelectComponent from "../../../../components/Select/index";
import { useAppSelector, useAppDispatch } from "../../../../hooks/appDispatch";
import SelectWithValidation from "../../../../components/Select/SelectWithValidation.component";
import {
  createSale,
  editSale,
} from "../../../../redux/state/slices/contacts/contactsThunk";
import { ButtonsModal } from "../../../../styled-components/button/index";
// import { schema } from "./yupSchemaLead";
import * as yup from "yup";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import SelectStateBooking from "../SelectStateBooking/index";
import moment from "moment";
import SelectOnlyForProduct from "../SelectProduct/index";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel } from "@mui/material";
import { ThemeContext } from "../../../../utilities/theme/ThemeContext";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { addHours, format } from "date-fns";

interface IFormInput {
  fullName: String;
}

type Option = {
  value: string;
  label: string;
};

const FormSale = ({
  onClose,
  currentEdit,
  setCurrentEdit,
  onCloseSubModal,
}: any) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const themeLocalStorage: any = localStorage.getItem("Theme");
  const themeState = JSON.parse(themeLocalStorage);
  const today = new Date();
  const funnels: any = useAppSelector((state) => state.dashboard.dataTracking);
  const { dataProduct } = useAppSelector((state) => state.tracking);
  const [idEditSale, setIdEditSale] = useState<number>(0);
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [selectFunnel, setSelectFunnel] = useState(funnels[0]?.id);
  const [selectProduct, setSelectProduct] = useState(dataProduct[0]?.name);
  const [price, setPrice] = useState(dataProduct[0]?.price);
  const [originalPrice, setOriginalPrice] = useState();
  const [dateSale, setDateSale] = useState<any>(today);
  const [dateSale2, setDateSale2] = useState<any>();
  const [selectProductOnchange, setSelectProductOnchange] = useState();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("El correo electrónico debe ser un correo electrónico válido")
      .required("El correo electronico es requerido"),
    // date: yup.date().required("La fecha es obligatoria"),
    selectFunnel: yup.string().required(),
    // selectProduct: yup.string().required("La fecha es obligatoria"),
    price: yup.number().required().typeError("El precio es requerido"),
  });

  const initForm = () => {
    if (currentEdit) {
      console.log("currentEdit", currentEdit);
      console.log("currentEditdate", currentEdit.date);

      const {
        email: emailParam,
        phone,
        date,
        funnel_id,
        product,
        price: priceParam,
      } = currentEdit;
      setEmail(emailParam);
      setPhone(phone);
      setSelectFunnel(funnel_id);
      setSelectProduct(product);
      setPrice(priceParam);
      setOriginalPrice(priceParam);
      const currentDate = moment(date, "ddd, DD MMM YYYY HH:mm:ss [GMT]");
      const dateFormat = currentDate.format("DD-MMM-YYYY hh:mm A");
      console.log("currentEditdatenew dateFormat", dateFormat);
      console.log("currentEditdatenew dateFormatnew", new Date(date));
      console.log("Date(date).toISOString()", new Date(date).toISOString());
      const currentFormatIso = new Date(date).toISOString();
      const formattedDate1 = currentFormatIso.slice(0, -1);
      const formattedDate = moment(formattedDate1).format(
        "ddd MMM DD YYYY HH:mm:ss [GMT]ZZ (z)"
      );
      console.log("formattedDate", formattedDate);
      ////////////
      const currentFormatDateToday = moment
        .utc(formattedDate1)
        .format("YYYY-MM-DD HH:mm:ss");
      console.log("currentFormatDateToday", currentFormatDateToday);
      console.log("currentFormatDateTodaydate", date);
      const fechaHoraNueva = moment(date)
        .add(10, "hours")
        .format("ddd, DD MMM YYYY HH:mm:ss [GMT]");
      console.log("fechaHoraNueva", fechaHoraNueva);
      setDateSale(fechaHoraNueva);
      // setDateSale(new Date(date).toISOString());
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
      // setValue("dateSale", currentEdit.appoiment_date);
      setIdEditSale(currentEdit.id);
    }
  }, [currentEdit, setValue]);

  useEffect(() => {
    setValue("phone", phone);
  }, [phone]);

  useEffect(() => {
    setValue("email", email);
  }, [email]);

  useEffect(() => {
    setValue("dateSale", dateSale);
  }, [dateSale]);

  useEffect(() => {
    setValue("selectFunnel", selectFunnel);
  }, [selectFunnel]);

  useEffect(() => {
    setValue("selectProduct", selectProduct);
  }, [selectProduct]);

  useEffect(() => {
    setValue("price", price);
  }, [price]);

  useEffect(() => {
    if (dataProduct.length === 0) {
      Swal.fire({
        title:
          "Para crear una venta debes crear un producto. Por favor ir a crear un producto para continuar.",
        confirmButtonText: "Ir a producto",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          navigate("/tracking");
          // addFunnels();
          localStorage.setItem("CreateProduct", "3");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    }
  }, [dataProduct]);

  useEffect(() => {
    if (!selectProductOnchange) return;
    const { price } = dataProduct.find(
      (data: any) => data.name === selectProductOnchange
    );
    setPrice(price);
  }, [selectProductOnchange]);

  const [refaund, setRefaund] = useState(false);
  console.log("dateSaleFechaHora12", dateSale);
  const onSubmit = (data: any) => {
    if (dataProduct.length === 0) {
      Swal.fire({
        title:
          "Para crear una venta debes crear un producto. Por favor ir a crear un producto para continuar.",
        confirmButtonText: "Ir a producto",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          navigate("/tracking");
          // addFunnels();
          localStorage.setItem("CreateProduct", "3");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
      return;
    }
    console.log("dateSaleFechaHora", dateSale);
    const currentDateSale = moment.utc(dateSale).format("YYYY-MM-DD HH:mm:ss");
    const currentRefaundPrice = !refaund ? data.price : 0;
    const currentRefaund = refaund ? originalPrice : 0;

    // const today = new Date(currentDateSale).toISOString();
    // const formattedDate = today.slice(0, -1);
    console.log("currentDateSale", currentDateSale);

    const form: any = {
      date: currentDateSale,
      email: data.email,
      funnel_id: data.selectFunnel,
      phone: data.phone,
      price: currentRefaundPrice,
      product: data.selectProduct,
      ts: "",
      refaund: currentRefaund,
    };
    console.log("formprice..", form);

    if (idEditSale !== 0) {
      form.id = currentEdit.id;
      form.id_traffic = currentEdit.id_traffic;
      dispatch(editSale(form, themeState));
      setCurrentEdit();
      setIdEditSale(0);
    } else {
      dispatch(createSale(form, themeState));
    }
    onClose();
  };

  const handleChangePrice = () => {
    setRefaund(!refaund);
    const currentPriceRefaund = !refaund ? 0 : originalPrice;
    setPrice(currentPriceRefaund);
  };

  // useEffect(() => {
  //   console.log("originalPrice", originalPrice);

  //   const currentPriceRefaund = refaund ? 0 : originalPrice;
  //   setPrice(currentPriceRefaund);
  // }, [refaund]);

  const { theme, themeFilterFunnel } = useContext(ThemeContext);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="form-group col-sm-12">
            <InputRegister
              placeholder="Ingrese e-mail de reserva"
              label="Correo electrónico de cita (Booking)"
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
              label="Teléfono del cliente"
              id="0"
              type="number"
              min={3}
              name="phone"
              register={register}
              error={String(errors["phone"]?.message)}
            />
          </div>
          <div
            className={`form-group col-sm-12 date-width ${
              themeState ? "modoDarkSelect" : ""
            }`}
          >
            <label className="title-label-popup w-100">Fecha y Hora</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                value={dayjs(dateSale)}
                minDate={dayjs(today)}
                onChange={(newValue: any) => {
                  console.log("cambianewValue", newValue.$d);
                  setDateSale(newValue.$d);
                }}
                ampm={false}
              />
            </LocalizationProvider>
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
          <div className="form-group col-sm-12">
            <SelectOnlyForProduct
              label="Seleccionar Producto"
              options={dataProduct}
              name="selectProduct"
              register={register}
              error={String(errors["selectProduct"]?.message)}
              setSelectProductOnchange={setSelectProductOnchange}
            />
          </div>
          <div
            className={`${
              currentEdit ? "form-group col-sm-7" : "form-group col-sm-12"
            }`}
          >
            <InputRegister
              placeholder="Ingresa el precio"
              label="Precio"
              id="0"
              type="text"
              min={0}
              disabled={refaund}
              name="price"
              register={register}
              defaultValue={price}
              // onChange={(e) => handleChangePrice(e)}
              error={String(errors["price"]?.message)}
            />
          </div>
          <div
            className={`${currentEdit ? "form-group col-sm-5" : "d-none"}`}
            style={{ paddingTop: "39px" }}
          >
            <FormControlLabel
              control={
                <Checkbox value={refaund} onClick={() => handleChangePrice()} />
              }
              label="Reembolso"
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-sm-6">
            <ButtonsModal
              className="btn btn-close"
              onClick={onClose}
              theme={themeFilterFunnel}
            >
              Cerrar
            </ButtonsModal>
          </div>
          <div className="form-group col-sm-6">
            <ButtonsModal className="btn btn-add" type="submit">
              {idEditSale !== 0 ? "Editar" : "Guardar"}
            </ButtonsModal>
          </div>
        </div>
      </form>
      <div className="row">
        <div className={`${currentEdit ? "form-group col-sm-12" : "d-none"}`}>
          <ButtonsModal className="btn btn-add" onClick={onCloseSubModal}>
            Atribuir Venta
          </ButtonsModal>
        </div>
      </div>
    </>
  );
};

export default FormSale;
